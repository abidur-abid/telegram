// Import necessary functions and components from react-router-dom and custom components
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"; // Home page component
import SingleChat from "../components/SingleChat"; // SingleChat component for individual chat
import Layout from "../layouts/Layout";
import NotFound from "../components/notFound";

// Create the router configuration using createBrowserRouter
export const router = createBrowserRouter([
  {
    // Root route with path "/"
    path: "/",
    element: <Layout/>,
    errorElement: <NotFound/>, // Main layout as the top-level component
    children: [
      {
        // Default child route, also with path "/"
        path: "/",
        element: <Home /> // Home page component for the default route
      },
      {
        // Child route with a dynamic path (e.g., /123)
        path: "/:id", // :id is a route parameter
        element: <SingleChat />, // SingleChat component for this route
        loader: async ({ params }) => {
          // Loader function to fetch data before rendering the SingleChat component
          const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${params.id}`);
          if (!response.ok) {
            // Throw an error if the network response is not ok
            throw new Error('Network response was not ok');
          }
          // Parse and return the JSON data from the response
          const data = await response.json();
          return data;
        }
      }
    ]
  }
]);
