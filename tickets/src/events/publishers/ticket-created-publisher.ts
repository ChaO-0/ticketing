import { Publisher, Subjects, TicketCreatedEvent } from '@cytickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
