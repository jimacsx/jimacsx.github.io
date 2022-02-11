import { createContext } from "react";
import { Order, OrderProduct } from "../interfaces/Order";
import { OrderProductContextProps } from "../interfaces/OrderProduct";

export const OrderProductContext = createContext(
  {} as OrderProductContextProps
);
const { Provider } = OrderProductContext;

interface Props {
  selectedProduct: OrderProduct;
  order: Order;
}

export const NewOrderProductContainer = ({ selectedProduct }: Props) => {
  return (
    <Provider
      value={{
        product: selectedProduct,
      }}
    >
      <div>
        <h3>Nuevo Producto de la orden</h3>
        <pre>{JSON.stringify(selectedProduct, null, 2)}</pre>
      </div>
    </Provider>
  );
};

export default NewOrderProductContainer;
