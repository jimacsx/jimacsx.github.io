import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Toolbar, Avatar, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { Variables as VariablesType } from "../../interfaces/Theme";
import { Variables } from "../../theme/export";
import logo from "../../logo.png";
import "./styles.scss";

interface Props {
  onMenu?: () => void;
  menuIsOpen?: boolean;
}

export const NavBar = ({ onMenu, menuIsOpen = false }: Props) => {
  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={(theme) => ({
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          minHeight: (Variables as VariablesType).appBarHeight,
          px: 3,
          [theme.breakpoints.up("xs")]: {
            minHeight: (Variables as VariablesType).appBarHeight,
          },
        })}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="UVXpress Veracruz Logo" className="logoUvx" />
          </Box>
          {onMenu && (
            <Box
              sx={{
                alignItems: "center",
                display: { xs: "flex", sm: "none" },
                justifyContent: "center",
                px: 2,
              }}
            >
              <Button
                variant="text"
                color="secondary"
                endIcon={menuIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                onClick={onMenu}
                disableRipple
                disableFocusRipple
                disableTouchRipple
              >
                Menu
              </Button>
            </Box>
          )}
        </Box>
        <Avatar alt="User">W</Avatar>
      </Toolbar>
    </AppBar>
  );
};
