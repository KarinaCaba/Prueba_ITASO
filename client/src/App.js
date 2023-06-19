import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar1 from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Profiles from "./pages/Profiles/Profiles";
import Ers from "./pages/Ers/Ers"
import News from "./pages/News/News";
import Survey from "./pages/Survey/Survey";
//import About from "./pages/About/About";

const Layout = () => {
  return (
    <>
      <Navbar1/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/profiles",
        element: <Profiles/>
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/ers",
        element: <Ers/>
      },
      {
        path: "/news",
        element: <News/>
      },
      {
        path: "/survey",
        element: <Survey/>
      }

    ]
  },

]);

function App() {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
