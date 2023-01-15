import React from "react";
import { Link } from "react-router-dom";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";

import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Documents from "parts/Documents";

export default function Success() {
  return (
    <Documents>
      <Header theme="black"></Header>

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/success", name: "Success Checkout" },
        ]}
      ></Breadcrumb>

      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <img
                src="/images/content/illustration-success.png"
                alt="congrats illustration"
              />
              <h2 className="text-3xl font-semibold mb-6">
                Ah yes it’s success!
              </h2>
              <p className="text-lg mb-12">
                Produk yang anda beli akan segera kami kirimkan.
              </p>
              <Link
                to="/"
                className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Sitemap></Sitemap>
      <Footer></Footer>
    </Documents>
  );
}
