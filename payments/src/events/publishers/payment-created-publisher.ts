import { Subjects, Publisher, PaymentCreatedEvent } from '@cytickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
