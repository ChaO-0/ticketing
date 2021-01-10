import { Publisher, Subjects, TicketUpdatedEvent } from '@cytickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
