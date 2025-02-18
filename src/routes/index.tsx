import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import { Home } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Add more routes here as needed
    ],
  },
]);
