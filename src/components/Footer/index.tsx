import { Container, Typography } from "@mui/material";

import { Colors as ColorsType } from "../../interfaces/Theme";
import { Colors } from "../../theme/export";

export const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 3 }}>
      <Typography
        variant="caption"
        sx={{
          color: `${(Colors as ColorsType).colorAltPrimaryLighter}`,
        }}
      >
        © 2022 UVXpress Veracruz
      </Typography>
    </Container>
  );
};
