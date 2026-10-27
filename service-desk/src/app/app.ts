
import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { tick } from '@angular/core/testing';

interface Ticket {
  id: number;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'In Progress' | 'Resolved';
}

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  appName = 'ServiceDesk';

  tickets: Ticket[] = [
    {
      id: 101,
      title: 'Login page not working',
      priority: 'High',
      status: 'Open',
    },
    {
      id: 102,
      title: 'Update customer details',
      priority: 'Medium',
      status: 'In Progress',
    },
    {
      id: 103,
      title: 'Fix invoice calculation',
      priority: 'High',
      status: 'Resolved',
    },
    {
      id: 104,
      title: 'Improve dashboard loading',
      priority: 'Low',
      status: 'Open',
    },
    {
      id: 105,
      title: 'Update the UI',
      priority: 'Low',
      status: 'Open',
    }
  ];

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
