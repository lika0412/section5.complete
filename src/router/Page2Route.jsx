import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    Path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    Path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
