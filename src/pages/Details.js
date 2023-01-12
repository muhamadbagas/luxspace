import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";

import ProductDetails from "parts/Details/ProductDetails";
import Suggestions from "parts/Details/Suggestions";

import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function Details() {
  return (
    <>
      <Header theme="black"></Header>

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/office", name: "Office Room" },
          { url: "/categories/office/products/1", name: "Details" },
        ]}
      ></Breadcrumb>

      <ProductDetails></ProductDetails>
      <Suggestions></Suggestions>
      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  );
}
