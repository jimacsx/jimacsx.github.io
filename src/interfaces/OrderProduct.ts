import { OrderProduct } from "./Order";

export interface OrderProductContextProps {
  product: OrderProduct;
  customerId?: string; // Id del cliente al que pertenece este producto de la Orden
  fileName?: string; // Nombre del archivo para identificar el producto de la Orden
}
