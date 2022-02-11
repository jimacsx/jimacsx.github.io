import {
  Avatar,
  Box,
  Button,
  CardActions,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Colors as ColorsType } from "../../interfaces/Theme";
import { Colors } from "../../theme/export";

export const OrdersPaperContainer = () => {
  return (
    <Paper variant="outlined">
      <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Box sx={{ mr: 2 }}>
          <Avatar sx={{ height: 56, width: 56 }}>
            <RequestQuoteIcon />
          </Avatar>
        </Box>
        <div>
          <Typography variant="overline" sx={{ fontWeight: 600 }}>
            Pedidos
          </Typography>
          <Typography variant="h6">3450</Typography>
        </div>
      </Box>
      <Divider />
      <CardActions sx={{ py: 1, px: 3 }}>
        <Button
          variant="text"
          href="/orders/list/"
          disableRipple
          sx={{
            textTransform: "none",
            color: `${(Colors as ColorsType).colorSecondary}`,
            "&:hover": {
              bgcolor: `${(Colors as ColorsType).colorBgHover}`,
            },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Pedidos
        </Button>
      </CardActions>
    </Paper>
  );
};
