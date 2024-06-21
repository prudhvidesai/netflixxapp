import "./App.css";
import { React } from "react";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
  ]);

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default App;
