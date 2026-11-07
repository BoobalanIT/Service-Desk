import { Component, Input } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList {
  @Input() tickets: Ticket[] = [];
}