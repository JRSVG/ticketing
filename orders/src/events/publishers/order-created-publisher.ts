import { Publisher, OrderCreatedEvent, Subjects } from '@jrsvgtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
subject: Subjects.OrderCreated = Subjects.OrderCreated;
}