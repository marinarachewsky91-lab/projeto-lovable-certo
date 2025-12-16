export interface ClientData {
  id: string;
  name: string;
  status: string;
  plan: string;
  closeDate: string;
  nextCharge: string;
  parcelValue: string;
  parcelsPaid: number;
  totalPaid: string;
  upsell: string;
  churnReason?: string;
}

export interface DashboardStats {
  totalClients: number;
  activeClients: number;
  upsellClients: number;
  mrr: number;
  totalRevenue: number;
  byPlan: { name: string; value: number }[];
  byStatus: { name: string; value: number }[];
}

export enum ClientStatus {
  ATIVO = 'Ativo',
  CHURN = 'Churn',
  TRANCADA = 'Trancada',
  PARCERIA = 'Parceria',
  INADIMPLENTE = 'Inadimplente',
  AGUARDANDO = 'Aguardando',
  UPSELL = 'Upsell',
  RENOVACAO = 'Em renovação',
}