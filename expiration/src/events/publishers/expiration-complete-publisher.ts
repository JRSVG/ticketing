import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@jrsvgtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
