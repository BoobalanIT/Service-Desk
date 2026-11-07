import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList {
  // ✅ Receives ticket data FROM parent
  @Input() tickets: Ticket[] = [];

  // ✅ Sends a new ticket event TO parent
  @Output() ticketAdded = new EventEmitter<Ticket>();

  addTicket(): void {
    const newTicket: Ticket = {
      id: Date.now(),
      title: 'New Ticket from Child',
      priority: 'Medium',
      status: 'Open',
    };
    // Fire the event — parent will catch this
    this.ticketAdded.emit(newTicket);
  }
}