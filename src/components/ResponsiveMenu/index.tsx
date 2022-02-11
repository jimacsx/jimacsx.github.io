import { useCallback, useState } from "react";
import {
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { NavLink, useLocation } from "react-router-dom";
import { Route, sections } from "../../routes/routes";

import { Variables as VariablesType } from "../../interfaces/Theme";
import { Variables } from "../../theme/export";
import styles from "./styles.module.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ResponsiveMenu = ({ open, onClose }: Props) => {
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

  const routeIsLocationPathname = useCallback(
    (_route: string) => {
      return _route === location.pathname;
    },
    [location]
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: { xs: "block", sm: "none" },
        top: (Variables as VariablesType).appBarHeight,
      }}
      hideBackdrop
    >
      <Paper elevation={16} className={styles.paper}>
        <List className={styles.list}>
          {sections.map((section, index) => (
            <div key={index}>
              <ListItemButton
                onClick={() => handleSectionClick(index)}
                className={
                  sectionHasLocationRoute(section.routes)
                    ? `${styles.listItemButton} ${styles.activeListItemButton}`
                    : styles.listItemButton
                }
                disableRipple
              >
                <ListItemIcon className={styles.listItemIcon}>
                  <Icon
                    className={
                      sectionHasLocationRoute(section.routes)
                        ? styles.activeIcon
                        : styles.inactiveIcon
                    }
                  >
                    {section.icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText
                  primary={section.title}
                  className={
                    sectionHasLocationRoute(section.routes)
                      ? styles.activeText
                      : styles.inactiveText
                  }
                  classes={{ primary: styles.myTypography }}
                />
                {index === sectionIndex ? (
                  <ExpandLessIcon className={styles.expandIcon} />
                ) : (
                  <ExpandMoreIcon className={styles.expandIcon} />
                )}
              </ListItemButton>
              <Collapse
                in={index === sectionIndex}
                timeout="auto"
                unmountOnExit
                className={styles.collapse}
              >
                <List
                  className={`${styles.list} ${styles.noPad}`}
                  disablePadding
                >
                  {section.routes.map((r) => (
                    <ListItemButton
                      key={r.to}
                      className={
                        routeIsLocationPathname(r.to)
                          ? `${styles.listItemButton} ${styles.activeListItemButton}`
                          : styles.listItemButton
                      }
                      onClick={() => onClose()}
                      disableRipple
                    >
                      <NavLink
                        to={r.to}
                        className={({ isActive }) =>
                          isActive ? styles.navActive : styles.navLink
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
      </Paper>
    </Modal>
  );
};
