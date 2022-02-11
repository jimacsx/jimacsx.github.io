import { useMemo } from "react";
import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { Route as RouteType, sections } from "../../routes/routes";
import { Footer } from "../../components";

import "./styles.scss";

export const Main = () => {
  const routes = useMemo((): RouteType[] => {
    const rutas: RouteType[] = [];
    sections.forEach((s) => {
      s.routes.forEach((r) => {
        rutas.push(r);
      });
    });
    return rutas;
  }, []);

  return (
    <Box className="mainComponent">
      <Box sx={{ pb: 3 }}>
        <Routes>
          {/* Dynamic routes */}
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};
