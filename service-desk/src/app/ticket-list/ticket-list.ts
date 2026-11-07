import { Component, Input/*, Output, EventEmitter*/ } from '@angular/core';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList {
  // ✅ Receives ticket list from parent via @Input
  @Input() tickets: Ticket[] = [];

  // 📌 @Output concept — commented for reference
  // @Output() ticketAdded = new EventEmitter<Ticket>();

  constructor(private ticketService: TicketService) {}

  addTicket(): void {
    const newTicket: Ticket = {
      id: Date.now(),
      title: 'New Ticket from Child',
      priority: 'Medium',
      status: 'Open',
    };

    // ✅ Adds directly to service
    this.ticketService.addTicket(newTicket);

    // 📌 @Output concept — commented for reference
    // this.ticketAdded.emit(newTicket);
  }
}