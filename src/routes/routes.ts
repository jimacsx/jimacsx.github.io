import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Customers = lazy(
  () => import(/* webpackChunkName: "Customers" */ "../layouts/Customers")
);
const Dashboard = lazy(
  () => import(/* webpackChunkName: "Dashboard" */ "../layouts/Dashboard")
);
const Products = lazy(
  () => import(/* webpackChunkName: "Products" */ "../layouts/Products")
);
const Sales = lazy(
  () => import(/* webpackChunkName: "Sales" */ "../layouts/Sales")
);

interface Section {
  title: string;
  icon: string;
  routes: Route[];
}

export const sections: Section[] = [
  {
    title: "Informes",
    icon: "dashboard", 
    routes: [
      {
        path: "dashboard/overview/*",
        to: "dashboard/overview/",
        Component: Dashboard,
        name: "Visión general",
      },
      {
        path: "dashboard/sales/*",
        to: "dashboard/sales",
        Component: Dashboard,
        name: "Ventas",
      }
    ]
  },
  {
    title: "Clientes",
    icon: "people", 
    routes: [
      {
        path: "customers/list/*",
        to: "customers/list",
        Component: Customers,
        name: "Lista",
      },
      {
        path: "customers/overview/*",
        to: "customers/overview",
        Component: Customers,
        name: "Resumen",
      },
      {
        path: "customers/orders/*",
        to: "customers/orders",
        Component: Customers,
        name: "Pedidos",
      }, {
        path: "customers/activity/*",
        to: "customers/activity",
        Component: Customers,
        name: "Actividad",
      }
    ]
  },
  {
    title: "Pedidos",
    icon: "request_quote", 
    routes: [
      {
        path: "orders/list/*",
        to: "orders/list",
        Component: Sales,
        name: "Lista",
      },
      {
        path: "orders/overview/*",
        to: "orders/overview",
        Component: Sales,
        name: "Resumen",
      }
    ]
  },
  {
    title: "Productos",
    icon: "shopping_cart", 
    routes: [
      {
        path: "products/list/*",
        to: "products/list",
        Component: Products,
        name: "Lista",
      },
      {
        path: "products/overview/*",
        to: "products/overview",
        Component: Products,
        name: "Resumen",
      },
      {
        path: "products/inventory/*",
        to: "products/inventory",
        Component: Products,
        name: "Inventario",
      }
    ]
  }
];