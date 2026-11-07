import { Component } from '@angular/core';
import { TicketList } from './ticket-list/ticket-list';
import { Ticket } from './ticket.model';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TicketList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  appName = 'ServiceDesk';

  constructor(public ticketService: TicketService) {}

  get tickets(): Ticket[] {
    return this.ticketService.getTickets();
  }

  get openCount(): number {
    return this.ticketService.getOpenCount();
  }

  get resolvedCount(): number {
    return this.ticketService.getResolvedCount();
  }

  get progressCount(): number {
    return this.ticketService.getProgressCount();
  }

  // 📌 @Output concept — commented for reference
  // onTicketAdded(ticket: Ticket): void {
  //   this.ticketService.addTicket(ticket);
  // }
}
