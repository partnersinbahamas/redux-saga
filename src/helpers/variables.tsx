import { Home, Newspaper } from "@mui/icons-material";
import { IRoute } from "../types/route";

export const routes: IRoute[] = [
  {
    id: 1,
    text: 'News',
    to: '/news',
    icon: <Newspaper />,
  },
  {
    id: 2,
    text: 'Home',
    to: '/home',
    icon: <Home/>,
  },
];

export const newsRoutes: IRoute[] = [
  {
    id: 1,
    text: 'Latest',
    to: '/news/latest',
  },
  {
    id: 2,
    text: 'Popular',
    to: '/news/popular',
  },
];