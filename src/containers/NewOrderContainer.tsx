import { useState } from "react";
import { Tabs, Button, Tab, Box, TextField, Grid, Paper } from "@mui/material";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { TabPanel } from "../components";
import { PrintContainer } from "./PrintContainer";
import { Order } from "../interfaces/Order";

interface Props {
  order?: Order;
  onBack?: () => void;
}

export const NewOrderContainer = ({ order, onBack }: Props) => {
  console.log("%New Order: ", "color: blue", order);

  const [tabNumber, setTabNumber] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabNumber(newValue);
  };

  return (
    <Box>
      <Paper elevation={3}>
        <Box sx={{ p: 3, pb: 0, maxWidth: 400 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="customer-name"
                label="Cliente: "
                variant="standard"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                id="customer-phone"
                label="Teléfono: "
                variant="standard"
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ p: 3 }}>
          <Tabs
            value={tabNumber}
            onChange={handleTabChange}
            aria-label="icon label tabs"
          >
            <Tab icon={<LocalPrintshopIcon />} label="Impresiones" />
            <Tab icon={<ReceiptLongIcon />} label="Laminados" />
            <Tab icon={<LocalPoliceIcon />} label="Pines" />
            <Tab icon={<AutoFixHighIcon />} label="Terminados" />
            <Tab icon={<MoreHorizIcon />} label="Otros" />
          </Tabs>
          <TabPanel value={tabNumber} index={0}>
            {<PrintContainer />}
          </TabPanel>
          <TabPanel value={tabNumber} index={1}>
            {<p>Laminados</p>}
          </TabPanel>
          <TabPanel value={tabNumber} index={2}>
            {<p>Pines</p>}
          </TabPanel>
          <TabPanel value={tabNumber} index={3}>
            {<p>Terminados</p>}
          </TabPanel>
          <TabPanel value={tabNumber} index={4}>
            {<p>Otros</p>}
          </TabPanel>
        </Box>
        <Button variant="contained" onClick={onBack} color="primary">
          Cancelar
        </Button>
      </Paper>
    </Box>
  );
};
