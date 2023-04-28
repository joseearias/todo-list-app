import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import RootLayout from "./pages/RootL";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
