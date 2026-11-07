import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';

// @Injectable makes this class available to be shared across the whole app
@Injectable({
  providedIn: 'root', // one single instance shared by ALL components
})
export class TicketService {
  // ✅ The master ticket list lives HERE now — not in app.ts
  private tickets: Ticket[] = [
    { id: 101, title: 'Login issue', priority: 'High', status: 'Open' },
    { id: 102, title: 'Update details', priority: 'Low', status: 'Resolved' },
  ];

  // Returns the full list to any component that asks
  getTickets(): Ticket[] {
    return this.tickets;
  }

  // Adds a new ticket — any component can call this
  addTicket(ticket: Ticket): void {
    this.tickets = [...this.tickets, ticket];
  }

  // Computed counts — any component can use these too
  getOpenCount(): number {
    return this.tickets.filter(t => t.status === 'Open').length;
  }

  getResolvedCount(): number {
    return this.tickets.filter(t => t.status === 'Resolved').length;
  }

  getProgressCount(): number {
    return this.tickets.filter(t => t.status === 'In Progress').length;
  }
}

