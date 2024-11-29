import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UniversityDetails from './components/UniversityDetails/UniversityDetails';
import Overview from './components/overview/Overview';
import Home from './components/Home/Home';
import Admissions from './components/admissions/Admissions';
import Majors from './components/Majors/Majors';
import Location from './components/location/Location';
const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/university/:id",
        element: <UniversityDetails />,
        children: [
          { path: "overview", element: <Overview /> }, 
          { path: "admissions", element: <Admissions/> },
          { path: "majors", element: <Majors/> },
          { path: "location", element: <Location/>},
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
