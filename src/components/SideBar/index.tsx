import { useState, useCallback } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Icon from "@mui/material/Icon";
import { NavLink, useLocation } from "react-router-dom";
import { Route, sections } from "../../routes/routes";

import {
  Variables as VariablesType,
  Colors as ColorsType,
} from "../../interfaces/Theme";
import { Variables, Colors } from "../../theme/export";
import "./styles.scss";

export const SideBar = () => {
  const [sectionIndex, setSectionIndex] = useState<number>(-1);

  let location = useLocation();

  const handleSectionClick = (index: number) => {
    if (index === sectionIndex) {
      setSectionIndex(-1);
    } else {
      setSectionIndex(index);
    }
  };

  const sectionHasLocationRoute = useCallback(
    (_sectionRoutes: Route[]) => {
      return _sectionRoutes.findIndex((r) => r.to === location.pathname) > -1;
    },
    [location]
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: (Variables as VariablesType).drawerWidth,
          top: (Variables as VariablesType).appBarHeight,
        },
      }}
      open
      className="sidebar"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: 2,
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: (Variables as VariablesType).drawerWidth,
            bgcolor: "background.paper",
            p: 0,
          }}
          component="nav"
          aria-labelledby="nested-list"
          className="sidebar__list"
        >
          {sections.map((section, index) => (
            <div key={index}>
              <ListItemButton
                onClick={() => handleSectionClick(index)}
                sx={{
                  "&:hover": {
                    bgcolor: `${(Colors as ColorsType).colorBgHover}`,
                  },
                  "&:focus": {
                    boxShadow: `${(Colors as ColorsType).colorSecondaryLightestS
                      } 0px 0px 0px 0.2rem`,
                  },
                  borderRadius: "6px",
                }}
                disableRipple
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                  }}
                >
                  <Icon
                    className={
                      sectionHasLocationRoute(section.routes)
                        ? "activeSection"
                        : "inactiveSection"
                    }
                  >
                    {section.icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText
                  primary={section.title}
                  sx={{
                    m: 0,
                    "& .MuiTypography-root": {
                      fontWeight: 500,
                    },
                  }}
                  className={
                    sectionHasLocationRoute(section.routes)
                      ? "activeSection"
                      : "inactiveSection"
                  }
                />
                {index === sectionIndex ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </ListItemButton>
              <Collapse
                in={index === sectionIndex}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {section.routes.map((r) => (
                    <ListItemButton
                      key={r.to}
                      sx={{
                        pl: 4,
                        "&:hover": {
                          bgcolor: `${(Colors as ColorsType).colorBgHover}`,
                        },
                        "&:focus": {
                          boxShadow: `${(Colors as ColorsType).colorSecondaryLightestS
                            } 0px 0px 0px 0.15rem`,
                        },
                        borderRadius: "6px",
                        py: "4px",
                      }}
                      disableRipple
                    >
                      <NavLink
                        to={r.to}
                        className={({ isActive }) =>
                          isActive ? "navActive" : "navLink"
                        }
                      >
                        {r.name}
                      </NavLink>
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
