import { createBrowserRouter } from "react-router-dom";
import MobileLayout from "../layouts/MobileLayout";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <MobileLayout/>,
      children: [
        {
          path: "/",
          element: <div>Hello world!</div>,
        }
      ]
    },
  ]);