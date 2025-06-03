import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";

export const routes = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {index: true, Component: Home},
    {path: '/login', Component: Login}
  ]}
])