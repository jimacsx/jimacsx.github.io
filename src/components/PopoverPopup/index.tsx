import { useState } from "react";
import { Button, List, ListItem, Paper, Popover } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Colors as ColorsType } from "../../interfaces/Theme";
import { Colors } from "../../theme/export";

export interface PopoverItem {
  id: string;
  value: any;
}

interface Props {
  defaultValue: PopoverItem;
  items: PopoverItem[];
  onChange?: (value: PopoverItem) => void;
}

export const PopoverPopup = ({ defaultValue, items, onChange }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [value, setValue] = useState<PopoverItem>(defaultValue);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleValue = (_value: PopoverItem) => {
    setValue(_value);
    handleClose();
    onChange?.(_value);
  };

  return (
    <>
      <Button
        variant="text"
        disableRipple
        sx={{
          textTransform: "none",
          color: `${(Colors as ColorsType).colorSecondary}`,
          "&:hover": {
            bgcolor: `${(Colors as ColorsType).colorBgHover}`,
          },
        }}
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
      >
        {value.value}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            boxShadow: "none",
          },
        }}
      >
        <Paper
          sx={{
            border: `1px solid ${(Colors as ColorsType).colorAltHighlightLightest
              }`,
          }}
        >
          <List>
            {items.map((item, index) => (
              <ListItem
                key={`item-${index + 1}`}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: `${(Colors as ColorsType).colorBgHover}`,
                  },
                }}
                onClick={() => handleValue(item)}
              >
                {item.value}
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popover>
    </>
  );
};
