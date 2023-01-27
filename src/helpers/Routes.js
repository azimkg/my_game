import MainPage from "../pages/MainPage";
import StatisticPage from "../pages/StatisticPage";

export const ROUTES_NAME = [
  {
    id: 1,
    element: <MainPage />,
    link: "/",
    title: "Главная",
  },
  {
    id: 2,
    element: <StatisticPage />,
    link: "/statistic",
    title: "Статистика",
  },
];
