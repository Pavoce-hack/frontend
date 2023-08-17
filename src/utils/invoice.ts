export interface Service {
  title: string;
  description: string;
  quantity: number;
  rate: number;
}

export enum InvoiceStatus {
  APPROVED = "Approved",
  COMPLETE = "Complete",
  DISPUTED = "Disputed",
  PAID = "Paid",
  PENDING = "Pending",
}

export interface InvoiceDocument {
  invoiceAddress: string;
  userId: string;
  amount: number;
  currency: string;
  paymentType: string;
  status: InvoiceStatus;
  clientName: string;
  clientEmail: string;
  services: Service[];
  startDate: string;
  endDate: string;
  duration: number;
  installment: number;
  initialDeposit: number;
  discount: number;
  termsAndConditions: string[];
}
