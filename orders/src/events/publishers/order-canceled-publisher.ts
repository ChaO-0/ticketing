import { Subjects, Publisher, OrderCanceledEvent } from '@cytickets/common';

export class OrderCanceledPublisher extends Publisher<OrderCanceledEvent> {
  readonly subject = Subjects.OrderCanceled;
}
