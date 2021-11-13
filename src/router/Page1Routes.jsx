import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
  {
    Path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    Path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    Path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
