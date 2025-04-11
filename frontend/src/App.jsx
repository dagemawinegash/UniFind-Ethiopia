import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import UniversityDetails from "./pages/UniversityDetails/UniversityDetails";
import Overview from "./components/overview/Overview";
import Home from "./pages/Home/Home";
import Majors from "./components/Majors/Majors";
import Location from "./components/location/Location";
import { Navigate } from "react-router-dom";
import List from "./pages/List/List";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/lists", element: <List /> },
      {
        path: "/university/:id",
        element: <UniversityDetails />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: "overview", element: <Overview /> },
          { path: "majors", element: <Majors /> },
          { path: "location", element: <Location /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
