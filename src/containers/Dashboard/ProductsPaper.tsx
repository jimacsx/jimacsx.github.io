import {
  Avatar,
  Box,
  Button,
  CardActions,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Colors as ColorsType } from "../../interfaces/Theme";
import { Colors } from "../../theme/export";

export const ProductsPaper = () => {
  return (
    <Paper variant="outlined">
      <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Box sx={{ mr: 2 }}>
          <Avatar sx={{ height: 56, width: 56 }}>
            <ShoppingCartIcon />
          </Avatar>
        </Box>
        <div>
          <Typography variant="overline" sx={{ fontWeight: 600 }}>
            Productos
          </Typography>
          <Typography variant="h6">68</Typography>
        </div>
      </Box>
      <Divider />
      <CardActions sx={{ py: 1, px: 3 }}>
        <Button
          variant="text"
          href="/products/list/"
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
          Productos
        </Button>
      </CardActions>
    </Paper>
  );
};
