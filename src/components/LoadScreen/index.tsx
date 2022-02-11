import { Box, CircularProgress } from "@mui/material";

import styles from "./styles.module.css";

export const LoadScreen = () => {
  return (
    <Box className={styles.loadScreen}>
      <Box className={styles.progressContainer}>
        <CircularProgress />
      </Box>
    </Box>
  );
};
