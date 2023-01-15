import React from "react";

import Header from "parts/Header";

import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import PageNotFound from "parts/PageNotFound";
import Documents from "parts/Documents";

export default function NotFound() {
  return (
    <Documents>
      <Header theme="black"></Header>

      <PageNotFound></PageNotFound>

      <Sitemap></Sitemap>
      <Footer></Footer>
    </Documents>
  );
}
