export type CategoryType =
  | "IMPRESIONES"
  | "LAMINADO Y ENMICADO"
  | "PINES"
  | "TERMINADOS"
  | "TARJETAS DE PRESENTACIÓN";

export type SubcategoryType = 
  | "ENMICADO GLOSS" // LAMINADO Y ENMICADO
  | "LAMINADO MATE - BRILLANTE" // LAMINADO Y ENMICADO
  | "LAMINADO SEDA" // LAMINADO Y ENMICADO
  | "CHICOS - 5.5 CM" // PINES
  | "GRANDES - 8.8 CM" // PINES
  | "PLECA / ENGRAPE" // TERMINADOS
  | "SUAJE" // TERMINADOS
  | "REDONDEO" // TERMINADOS
  | "CLIENTE UVX" // BARNIZ
  | "CARTA" // BARNIZ Ó IMPRESIONES
  | "TABLOIDE" // BARNIZ Ó IMPRESIONES
  | "INTERMEDIO" // BARNIZ O IMPRESIONES
  | "GRUESO" // IMPRESIONES
  | "DELGADO" // IMPRESIONES
  | "PLUS" // IMPRESIONES => TRANSPARENTE Y POLYPAP
  | "ESPECIAL"; // IMPRESIONES

export type ProductType =
  | "COUCHE 150GR"
  | "COUCHE 200GR"
  | "COUCHE 300GR"
  | "SULFATADA 12PT"
  | "SULFATADA 14PT"
  | "OPALINA"
  | "PAPEL OPALINA"
  | "OPALINA CREMA"
  | "BOND"
  | "ADHESIVO"
  | "TRANSPARENTE"
  | "POLYPAP"
  | "ESPECIAL"
  | "PAPEL CLIENTE";

export type Side = "F" | "R";

export type OrderStatus = "PENDIENTE" | "PAGADA";

export interface CategoryCatalog {
  id: string;
  description: string;
  key: CategoryType;
}

export interface SubcategoryCatalog {
  id: string;
  categoryId: string;
  description: string;
  key: SubcategoryType;
}

export interface ProductCatalog {
  id: string;
  subcategoryId: string;
  description: string;
  key: ProductType;
}

export interface OrderProduct {
  orderId: string;
  categoryId: string;
  subcategoryId: string;
  quantity: number; // Cantidad del elemento de la Orden ¿Qué cantidad del elemento de la orden va a querer?
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

export interface OrdeSale {
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