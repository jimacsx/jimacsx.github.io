export type PaperSize = "Tabloide" | "Carta";

export type PaperTypes = 
  "COU 300gr" |
  "SULF 12pt" |
  "OPALINA" |
  "ALBANENE" |
  "COU 200gr" | 
  "COU 150gr" | 
  "PAPEL OPALINA" |
  "BOND" |
  "ADHESIVO" |
  "SULF 14pt" |
  "OPALINA CREMA" |
  "METÁLICOS" |
  "TEXTURIZADOS";

export type Side = "F" | "R";

export type OrderStatus = "Pendiente" | "Pagada";

export interface PaperCategory {
  id: string;
  description: string;
}

export interface PaperType {
  id: string;
  description: string;
  label: PaperTypes;
  paperCategoryId: string;
}

export interface Promotion {
  id: string;
  description: string;
  productId: string; // Id del Producto al que pertenece la Promoción
}

export interface Product {
  id: string;
  description: string;
  unitPrice: number;
  promotion?: Promotion;
}

export interface OrderProduct {
  orderId: string; // Id de la Orden a la que pretenece el Producto
  product: Product; // Información de producto que pertenece a la Orden
  productQuantity: number; // Cantidad del producto "¿Qué cantidad del producto va a querer?"
  pritingSides: Side[]; // Lado (s) a imprimir
  additionalFeature?: string; // Indicación especial
  varnishSides?: Side[]; // Lado (s) a aplicar barniz
  applyPromo?: boolean; // Aplicar promo
}

export interface Customer {
  id?: string;
  names: string;
  lastName: string;
  motherLastName: string;
  phone?: string;
  cellPhone?: string;
  email?: string;
}

export interface Order {
  id: string; // Id de la Orden
  number: number; // No. Orden
  customer: Customer; // Información del Cliente
  products: OrderProduct[]; // Productos de la Orden
  creationDate?: string; // Fecha de creación de la Orden
  expirationDate?: string; // Fecha de vencimiento de la Orden
  amount?: number; // Total ó Importe
  amountPaid?: number; // Anticipo ó Importe Pagado
  amountToPay?: number; // Saldo ó 'Por Pagar' ó 'Saldo por Pagar'
  taxes?: boolean; // Impuestos
  status?: OrderStatus; // Estado de la orden 'Pendiente' | 'Pagada'
}

export interface OrderContextProps {
  order: Order;
}
