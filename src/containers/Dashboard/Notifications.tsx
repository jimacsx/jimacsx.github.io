import { useEffect, useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@mui/material";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Colors as ColorsType } from "../../interfaces/Theme";
import { Colors } from "../../theme/export";

export const NotificationsContainer = () => {
  const [pendingOrders, setPendingOrders] = useState<number>(0);

  useEffect(() => {
    setPendingOrders(1);
  }, []);

  return (
    <Paper variant="outlined">
      <List>
        <ListItem>
          <ListItemIcon>
            <RequestQuoteIcon />
          </ListItemIcon>
          <ListItemText>{`${pendingOrders} Pedido${pendingOrders > 1 ? "s" : ""
            } pendiente${pendingOrders > 1 ? "s" : ""} necesita${pendingOrders > 1 ? "n" : ""
            } tu atención.`}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              sx={{
                "&:hover": {
                  bgcolor: `${(Colors as ColorsType).colorBgHover}`,
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  );
};
