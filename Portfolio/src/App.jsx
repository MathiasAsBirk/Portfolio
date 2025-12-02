import { useRoutes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
  ]);
  return <Layout>{routes}</Layout>;
}
