import mongoose from 'mongoose';
import { OrderCanceledListener } from '../order-canceled-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Order } from '../../../models/order';
import { OrderCanceledEvent, OrderStatus } from '@cytickets/common';
import { Message } from 'node-nats-streaming';

const setup = async () => {
  const listener = new OrderCanceledListener(natsWrapper.client);

  const order = Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Created,
    price: 10,
    userId: 'asd',
    version: 0,
  });
  await order.save();

  const data: OrderCanceledEvent['data'] = {
    id: order.id,
    version: 1,
    ticket: {
      id: 'asd',
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg, order };
};

it('updates the status of the order', async () => {
  const { listener, data, msg, order } = await setup();

  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder.status).toEqual(OrderStatus.Cancelled);
});

it('acks the message', async () => {
  const { listener, data, msg, order } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
