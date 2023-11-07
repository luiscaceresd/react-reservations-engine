import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import mainImage from "./assets/mainImage.jpg";

function Information() {
  return (
    <section className="relative isolate px-6 lg:px-8 bg-primaryGreen text-white">
      <div className="mx-auto max-w-2xl py-6 lg:py-14">
        <h1 className="text-primaryYellow sm:flex sm:justify-center">
          Little Lemon
        </h1>
        <h2 className="text-secondaryGray mb-2 sm:flex sm:justify-center">
          Miramichi
        </h2>
        <div className="sm:mb-8 sm:flex sm:justify-center">
          <figure className="sm:mt-6">
            <img
              src={mainImage}
              alt="Sushi dish"
              className="object-cover object-center w-full h-96 rounded-lg shadow-lg sm:h-96"
            />
          </figure>
        </div>
        <div className="mt-6 text-center">
          <p className="mt-6 text-lg leading-8 text-white">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <a
              href="#"
              id="reserve-btn"
              className="hover:bg-white bg-primaryYellow text-primaryGreen self-align py-2 px-4 rounded shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Reserve A Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;
