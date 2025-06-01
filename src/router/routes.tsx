import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Login from "../components/Login/Login";

export const routes = createBrowserRouter([
  {path: '/', Component: Root, children: [
    {path: '/login', Component: Login}
  ]}
])