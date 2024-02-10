import { ReactNode } from "react";

export interface IRoute {
  id: number,
  to: string,
  text: string,
  icon?: ReactNode,
};