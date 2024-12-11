import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {
  Layout,
  HomeScreen,
  SignupScreen,
  LoginScreen,
} from "./components/index";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />

      <Route
        path="/signup"
        element={
          <Layout authentication={false}>
            <SignupScreen />
          </Layout>
        }
      />

      <Route
        path="/login"
        element={
          <Layout authentication={false}>
            <LoginScreen />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Layout authentication={false}>
            <div
              style={{ height: "80vh" }}
              className="flex justify-center items-center text-5xl"
            >
              404 Page Not found
            </div>
          </Layout>
        }
      />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
