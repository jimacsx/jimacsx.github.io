import {
  Side,
  Promotion,
  Product,
  Order,
  Customer,
  OrderProduct,
  PaperSize,
  PaperCategory,
  PaperType,
} from "../interfaces/Order";

export const DocumentSides: Side[] = ["F", "R"];

/**
 * Posibles catálogos que pueden ser consultados desde Base de Datos
 */
export const PromotionCatalog: Promotion[] = [
  {
    id: "1",
    description: "Promoción de Opalina",
    productId: "1",
  },
  {
    id: "2",
    description: "Promoción de BOND",
    productId: "2",
  },
];

export const Products: Product[] = [
  {
    id: "1",
    description: "Impresiones",
    unitPrice: 0.5,
  },
  {
    id: "2",
    description: "Pines",
    unitPrice: 5,
  },
  {
    id: "3",
    description: "Acabados",
    unitPrice: 3,
  },
  {
    id: "4",
    description: "Otros",
    unitPrice: 10,
  },
];

const OrderProducts: OrderProduct[] = [
  {
    orderId: "1",
    product: Products[0],
    productQuantity: 10,
    pritingSides: ["F"],
  },
];

export const Customer1: Customer = {
  id: "1",
  names: "Willians Dario",
  lastName: "Jiménez",
  motherLastName: "Andrade",
};

export const Orders: Order[] = [
  {
    id: "1",
    number: 1,
    customer: Customer1,
    products: OrderProducts,
    creationDate: "2022-01-23T12:42:56.928-0600",
    amount: 150,
  },
];

export const PaperSizes: PaperSize[] = ["Tabloide", "Carta"];

export const PaperCategories: PaperCategory[] = [
  {
    id: "1",
    description: "Gruesos",
  },
  {
    id: "2",
    description: "Delgados",
  },
  {
    id: "3",
    description: "Plus",
  },
  {
    id: "4",
    description: "Especiales",
  },
];

export const PaperTypesCatalog: PaperType[] = [
  {
    id: "1",
    description: "Couche 300gr",
    label: "COU 300gr",
    paperCategoryId: "1",
  },
  {
    id: "2",
    description: "Sulfatada 12pt",
    label: "SULF 12pt",
    paperCategoryId: "1",
  },
  {
    id: "3",
    description: "Opalina",
    label: "OPALINA",
    paperCategoryId: "1",
  },
  {
    id: "4",
    description: "Albanene",
    label: "ALBANENE",
    paperCategoryId: "1",
  },
  {
    id: "5",
    description: "Couche 200gr",
    label: "COU 200gr",
    paperCategoryId: "2",
  },
  {
    id: "6",
    description: "Couche 150gr",
    label: "COU 150gr",
    paperCategoryId: "2",
  },
  {
    id: "7",
    description: "Papel Opalina",
    label: "PAPEL OPALINA",
    paperCategoryId: "2",
  },
  {
    id: "8",
    description: "Bond",
    label: "BOND",
    paperCategoryId: "2",
  },
  {
    id: "9",
    description: "Adhesivo",
    label: "ADHESIVO",
    paperCategoryId: "3",
  },
  {
    id: "10",
    description: "Sulfatada 14pt",
    label: "SULF 14pt",
    paperCategoryId: "3",
  },
  {
    id: "11",
    description: "Opalina Crema",
    label: "OPALINA CREMA",
    paperCategoryId: "3",
  },
  {
    id: "12",
    description: "Metálicos",
    label: "METÁLICOS",
    paperCategoryId: "4",
  },
  {
    id: "13",
    description: "Texturizados",
    label: "TEXTURIZADOS",
    paperCategoryId: "4",
  },
];
