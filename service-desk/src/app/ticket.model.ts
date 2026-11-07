export interface Ticket {
    id: number;
    title: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Open' | 'In Progress' | 'Resolved';
}