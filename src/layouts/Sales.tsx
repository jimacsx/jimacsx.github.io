import { useCallback, useState } from "react";
import { Header } from "../components";
import { NewOrderContainer, OrderListContainer } from "../containers";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import styles from "../styles/styles.module.css";

export const Sales = () => {
  const [newOrderState, setNewOrderState] = useState<boolean>(false);

  const newOrder = useCallback(() => {
    setNewOrderState(true);
  }, []);

  const backToList = useCallback(() => {
    setNewOrderState(false);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header title="Ventas" withDate />
      {!!!newOrderState && (
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={newOrder}
        >
          Generar orden
        </Button>
      )}
      {!!newOrderState && <NewOrderContainer onBack={backToList} />}
      {!!!newOrderState && <OrderListContainer />}
    </div>
  );
};

export default Sales;
