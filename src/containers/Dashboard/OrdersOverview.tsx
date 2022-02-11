import { useEffect, useState, useCallback } from "react";
import {
  Box,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Paper,
} from "@mui/material";
import { DonutChart, PopoverPopup } from "../../components";
import { PopoverItem } from "../../components/PopoverPopup";

import { Colors as ColorsType } from "../../interfaces/Theme";
import { Colors } from "../../theme/export";

export const OrdersOverviewContainer = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PopoverItem>({
    id: "1",
    value: "Últimos 7 días",
  });
  const [chartSeries, setChartSeries] = useState<number[] | undefined>(
    undefined
  );
  const [chartLabels, setChartLabels] = useState<string[] | undefined>(
    undefined
  );
  const [chartColors, setChartColors] = useState<string[] | undefined>(
    undefined
  );

  const handlePeriod = useCallback((_period: PopoverItem) => {
    setSelectedPeriod(_period);
  }, []);

  useEffect(() => {
    if (selectedPeriod) {
      const { id } = selectedPeriod;
      if (id === "1") {
        setChartSeries([1000, 250]);
        setChartLabels(["Pagadas", "Pendientes"]);
        setChartColors([
          `${(Colors as ColorsType).colorSuccess}`,
          `${(Colors as ColorsType).colorWarning}`,
          `${(Colors as ColorsType).colorDanger}`,
        ]);
      } else if (id === "2") {
        setChartSeries([1000, 50, 100]);
        setChartLabels(["Pagadas", "Pendientes", "Canceladas"]);
        setChartColors([
          `${(Colors as ColorsType).colorSuccess}`,
          `${(Colors as ColorsType).colorWarning}`,
          `${(Colors as ColorsType).colorDanger}`,
        ]);
      } else if (id === "3") {
        setChartSeries([1000000, 100000, 100000, 500000]);
        setChartLabels(["Pagadas", "Pendientes", "Canceladas", "Facturadas"]);
        setChartColors([
          `${(Colors as ColorsType).colorSuccess}`,
          `${(Colors as ColorsType).colorWarning}`,
          `${(Colors as ColorsType).colorDanger}`,
          `${(Colors as ColorsType).colorSecondary}`,
        ]);
      }
    }
  }, [selectedPeriod]);

  return (
    <Paper variant="outlined">
      <CardHeader
        title={"Resumen de pedidos"}
        titleTypographyProps={{
          variant: "h6",
          sx: {
            fontSize: 18,
            fontWeight: 500,
          },
        }}
        action={
          <PopoverPopup
            defaultValue={selectedPeriod}
            items={[
              { id: "1", value: "Últimos 7 días" },
              { id: "2", value: "Último mes" },
              { id: "3", value: "Último año" },
            ]}
            onChange={handlePeriod}
          />
        }
      />
      <Divider />
      <CardContent>
        {chartSeries?.length && chartLabels?.length && chartColors?.length ? (
          <DonutChart
            series={chartSeries}
            labels={chartLabels}
            colors={chartColors}
            height={250}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 480,
            }}
          >
            <CircularProgress size={60} />
          </Box>
        )}
      </CardContent>
    </Paper>
  );
};
