export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED';

export interface TicketItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface TicketCode {
  code: string;
  issuedAt: string;
}

export interface OrderCustomer {
  name: string;
  email: string;
  phone?: string;
}

export interface OrderVisit {
  date: string;
  time: string;
}

export interface Order {
  id: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  customer: OrderCustomer;
  visit: OrderVisit;
  items: TicketItem[];
  totalAmount: number;
  paymentReference: string;
  tickets: TicketCode[];
}

export interface PaymentInstructions {
  iban: string;
  holder: string;
  bank: string;
}
