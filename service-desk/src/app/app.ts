
import { Component } from '@angular/core';
import { TicketList } from './ticket-list/ticket-list';
import { Ticket } from './ticket.model';
//import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TicketList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  appName = 'ServiceDesk';

  tickets: Ticket[] = [
    { id: 101, title: 'Login issue', priority: 'High', status: 'Open' },
    { id: 102, title: 'Update details', priority: 'Low', status: 'Resolved' }
  ];

  addTicket(): any {
    const newticket: Ticket = {
      id: Date.now(),
      title: 'New',
      priority: 'Low',
      status: 'Open',
    };
    this.tickets = [...this.tickets, newticket];
  }

  // ✅ This method is called when child emits @Output ticketAdded event
  onTicketAdded(ticket: Ticket): void {
    this.tickets = [...this.tickets, ticket];
    // Dashboard counts (openCount, resolvedCount, progressCount) auto-update
    // because they are getters that read from this.tickets
  }

  get openCount(): number {
    return this.tickets.filter(
      ticket => ticket.status === 'Open'
    ).length;
  }

  get resolvedCount(): number {
    return this.tickets.filter(
      ticket => ticket.status === 'Resolved'
    ).length;
  }

  get progressCount(): number {
    return this.tickets.filter(
      ticket => ticket.status === 'In Progress'
    ).length;
  }

  showMessage(): void {
    alert('Ticket creation will be added next!');
  }
}
