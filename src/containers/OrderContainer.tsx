import { createContext } from "react";
import {
  Customer,
  Order,
  OrderProduct,
  Product,
  OrderContextProps,
} from "../interfaces/Order";
import { NewOrderProductContainer } from "./NewOrderProductContainer";

export const OrderContext = createContext({} as OrderContextProps);
const { Provider } = OrderContext;

const INITIAL_CUSTOMER: Customer = {
  names: "Willians Dario",
  lastName: "Jiménez",
  motherLastName: "Andrade",
};

const PRODUCT_1: Product = {
  id: "1",
  description: "Impresiones",
  unitPrice: 0.5,
};

const PRODUCT_2: Product = {
  id: "2",
  description: "Pines",
  unitPrice: 3,
};

const PRODUCT_3: Product = {
  id: "3",
  description: "Acabados",
  unitPrice: 5,
};

const PRODUCT_4: Product = {
  id: "4",
  description: "Otros",
  unitPrice: 1,
};

const INITIAL_ORDER_PRODUCTS: OrderProduct[] = [
  {
    orderId: "1",
    product: PRODUCT_1,
    productQuantity: 0,
    pritingSides: ["F"],
  },
  {
    orderId: "1",
    product: PRODUCT_2,
    productQuantity: 0,
    pritingSides: ["F"],
  },
  {
    orderId: "1",
    product: PRODUCT_3,
    productQuantity: 0,
    pritingSides: ["F", "R"],
  },
  {
    orderId: "1",
    product: PRODUCT_4,
    productQuantity: 0,
    pritingSides: ["F", "R"],
  },
];

const INITIAL_ORDER: Order = {
  id: "1",
  number: 1,
  customer: INITIAL_CUSTOMER,
  products: INITIAL_ORDER_PRODUCTS,
  creationDate: "2022-01-23T12:42:56.928-0600",
};

/**
 * Constantes para el formulario del Nuevo Producto de la Orden
 */
const SELECTED_ORDER_PRODUCT: OrderProduct = {
  orderId: "1",
  product: PRODUCT_1,
  productQuantity: 0,
  pritingSides: [],
  additionalFeature: "",
  varnishSides: [],
  applyPromo: false,
};
/**
 * Final de Constantes para el formulario del Nuevo Producto de la Orden
 */

export const OrderContainer = () => {
  const order = INITIAL_ORDER;
  return (
    <Provider
      value={{
        order,
      }}
    >
      <div>
        <NewOrderProductContainer
          selectedProduct={SELECTED_ORDER_PRODUCT}
          order={order}
        />
        <h2>Orden</h2>
        <pre>{JSON.stringify(INITIAL_ORDER, null, 2)}</pre>
      </div>
    </Provider>
  );
};
