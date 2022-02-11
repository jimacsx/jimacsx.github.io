import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { PaperSize, PaperType, PaperTypes } from "../interfaces/Order";
import { PaperSizes, PaperTypesCatalog } from "../constants";

export const PrintContainer = () => {
  const [paperSize, setPaperSize] = useState<PaperSize>("Tabloide");
  const [paperType, setPaperType] = useState<PaperTypes>("COU 300gr");

  const handlePaperSizeChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: PaperSize
  ) => {
    setPaperSize(newAlignment);
  };

  const handlePaperTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: PaperTypes
  ) => {
    setPaperType(newAlignment);
  };

  /**
   * 
   * @param productId id del producto seleccionado
   * @param subcategoryId  id de la subcategoria seleccionada ej: 'TABLOIDE' | 'CARTA' | 'DUPLEX TABLOIDE' | 'DUPLEX CARTA'
   * @returns tabulador de precios
   */
  const getTabuladorPrecios = (productId: string, subcategoryId: string) => {
    return [
      { inferior: 1, superior: 9, precio: '12' },
      { inferior: 10, superior: 150, precio: '11' },
      { inferior: 151, superior: 500, precio: '10.5' },
      { inferior: 501, superior: 800, precio: '10.0' },
      { inferior: 801, superior: 1100, precio: '9.0' },
      { inferior: 1101, precio: '12' }
    ]
  }

  console.log(getTabuladorPrecios)

  return (
    <div>
      <p>Tamaño de papel:</p>
      <ToggleButtonGroup
        color="primary"
        value={paperSize}
        exclusive
        onChange={handlePaperSizeChange}
      >
        {PaperSizes.map((ps: PaperSize, index: number) => (
          <ToggleButton key={index} value={ps}>
            {ps}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box sx={{ maxWidth: 500 }}>
        <p>Tipo de papel:</p>
        <ToggleButtonGroup
          color="primary"
          value={paperType}
          exclusive
          onChange={handlePaperTypeChange}
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {PaperTypesCatalog.map((pt: PaperType, index: number) => (
            <ToggleButton key={index} value={pt.label}>
              {pt?.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </div>
  );
};
