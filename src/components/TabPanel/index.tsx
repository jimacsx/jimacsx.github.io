import { Box } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = ({ children, value, index, ...other }: Props) => {
  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 2 }} >
          {children}
        </Box>
      )}
    </div>
  );
};
