import { useState, useEffect, useMemo } from "react";
import { DonutChartState } from "../../interfaces/Charts";
import Chart from "react-apexcharts";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Colors as ColorsType } from "../../interfaces/Theme";
import { Colors } from "../../theme/export";

interface Props {
  series: number[];
  labels: string[];
  colors: string[];
  width?: number | string;
  height?: number | string;
}

export const DonutChart = ({
  series,
  labels,
  colors,
  width,
  height,
}: Props) => {
  const [donutChart, setDonutChart] = useState<DonutChartState>({});

  const total = useMemo(() => series.reduce((a, b) => a + b, 0), [series]);

  useEffect(() => {
    setDonutChart({
      options: {
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
        },
        colors,
        legend: {
          show: false,
        },
        tooltip: {
          y: {
            formatter: undefined,
            title: {
              formatter: (seriesName: string) => {
                const index = parseInt(seriesName.split("-")?.[1]);
                return labels?.[index - 1] || seriesName;
              },
            },
          },
        },
      },
      series,
      labels,
    });
  }, [series, labels, colors]);

  return (
    <>
      <Chart
        options={donutChart?.options || {}}
        series={donutChart.series || []}
        type="donut"
        width={width}
        height={height || 250}
      />
      <List
        subheader={
          <ListSubheader sx={{ display: "flex", alignItems: "center", py: 1 }}>
            <Typography variant="subtitle2" component="h6">
              Total
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="subtitle2" component="h6">
              {total}
            </Typography>
          </ListSubheader>
        }
        sx={{ py: 2 }}
      >
        <Divider />
        {series.map((s, index) => (
          <ListItem
            key={`series-${index + 1}`}
            sx={{
              borderBottom: `1px solid ${(Colors as ColorsType).colorAltHighlightLightest
                }`,
            }}
          >
            <Box sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: `${colors[index]}`,
              mr: 1
            }} />
            <Typography
              variant="body2"
              component="p"
              sx={{
                color: `${(Colors as ColorsType).colorGray}`,
              }}
            >
              {labels[index]}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
              variant="body2"
              component="p"
              sx={{
                color: `${(Colors as ColorsType).colorGray}`,
              }}
            >
              {s}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};
