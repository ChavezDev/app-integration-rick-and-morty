import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import About from "../components/pages/about/About";
import Detail from "../components/pages/detail/Detail";
import Error from "../components/pages/error/Error";
import Gallery from "../components/pages/gallery/Gallery";
import Home from "../components/pages/home/Home";
import FormLogin from "../components/pages/login/FormLogin";




const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <Gallery/>},
      { path: "/detail/:id", element: <Detail /> },
    ],
  },
  {
    path: "/login",
    element: <FormLogin />,
  },
]);

export default router;
