import { useState, SyntheticEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { OrdersOverviewContainer } from "../containers/Dashboard/OrdersOverview";
import { NotificationsContainer } from "../containers/Dashboard/Notifications";
import { OrdersPaperContainer } from "../containers/Dashboard/OrdersPaper";
import { ProductsPaper } from "../containers/Dashboard/ProductsPaper";

export const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const navigate = useNavigate();
  let location = useLocation();

  const handleTab = (_event: SyntheticEvent, newValue: number) => {
    if (newValue === 1) {
      navigate("/dashboard/sales");
    } else {
      navigate("/dashboard/overview");
    } 
  };

  useEffect(() => {
    if (location?.pathname.includes("sales")) {
      setTabIndex(1);
    } else {
      setTabIndex(0);
    }
  }, [location])


  return (
    <Container maxWidth="lg">
      <Box
        sx={(theme) => ({
          py: 4,
          [theme.breakpoints.down("sm")]: {
            py: 2,
          },
        })}
      >
        <Typography variant="h5" component="h5" sx={{ fontWeight: 500 }}>
          Informes
        </Typography>
        <Tabs
          value={tabIndex}
          onChange={handleTab}
          sx={(theme) => ({
            mt: 2,
            [theme.breakpoints.down("sm")]: {
              mt: 1,
            },
          })}
        >
          <Tab label="Visión general" disableRipple />
          <Tab label="Ventas" disableRipple />
        </Tabs>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <NotificationsContainer />
          </Grid>
          <Grid item xs={12} md={4}>
            <OrdersPaperContainer />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductsPaper />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrdersOverviewContainer />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
