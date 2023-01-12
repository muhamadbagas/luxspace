import React from "react";

import Header from "parts/Header";

import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import PageNotFound from "parts/PageNotFound";

export default function NotFound() {
  return (
    <>
      <Header theme="black"></Header>

      <PageNotFound></PageNotFound>

      <Sitemap></Sitemap>
      <Footer></Footer>
    </>
  );
}
