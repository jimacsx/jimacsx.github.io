import { Orders } from "../constants";

export const OrderListContainer = () => {
  return (
    <div>
      <h2>Ordenes del día</h2>
      <pre>{JSON.stringify(Orders, null, 2)}</pre>
    </div>
  );
};
