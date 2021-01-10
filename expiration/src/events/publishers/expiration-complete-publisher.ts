import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@cytickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
