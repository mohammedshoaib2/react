import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import Layout from "./Layout";
import About from "./About";
import Products, { productsLoader } from "./Products.jsx";
import GetStarted from "./GetStarted.jsx";
import ContactLayout from "./ContactLayout.jsx";
import ContactInfo from "./ContactInfo.jsx";
import ContactForm from "./ContactForm.jsx";
import PageNotFound from "./PageNotFound.jsx";
import NewElement from "./NewElement.jsx";
import ProductLayout from "./ProductLayout.jsx";
import ProductDetails from "./ProductDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path=":id" element={<NewElement />} />
      <Route path="about" element={<About />} />

      <Route path="products" element={<ProductLayout />}>
        <Route loader={productsLoader} index element={<Products />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>

      <Route path="started" element={<GetStarted />} />
      <Route path="contact" element={<ContactLayout />}>
        <Route path="info" element={<ContactInfo />} />
        <Route path="form/:name" element={<ContactForm />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
