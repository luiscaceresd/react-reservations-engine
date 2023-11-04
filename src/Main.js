import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Import images
import mainImage from "./assets/mainImage.jpg";
import greekSalad from "./assets/greekSalad.jpg";
import bruchetta from "./assets/bruchetta.png";
import lemmonDessert from "./assets/lemmonDessert.jpg";
import persona1 from "./assets/persona1.png";
import persona2 from "./assets/persona2.png";
import persona3 from "./assets/persona3.png";
import persona4 from "./assets/persona4.png";
import finalImage1 from "./assets/finalImage1.jpg";
import finalImage2 from "./assets/finalImage2.jpg";

function Main() {
  return (
    <main>
      {/* Restaurant description */}
      <section className="relative isolate px-6 lg:px-8 bg-primaryGreen text-white">

        <div className="mx-auto max-w-2xl py-6 lg:py-20">
          <h1 className="text-primaryYellow sm:flex sm:justify-center">
            Little Lemon
          </h1>
          <h2 className="text-secondaryGray mb-6  sm:flex sm:justify-center">
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
                className="bg-primaryYellow hover:bg-white text-primaryGreen self-align py-2 px-4 rounded shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reserve A Table
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </section>
      {/* Week's specials */}
      <section>
        <h2>This weeks specials!</h2>

        <article>
          <h3>Greek Salad</h3>
          <img src={greekSalad} alt="Greek Salad" />
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            classic-style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <span>$12.99</span>
          <button>Order a delivery</button>
        </article>

        <article>
          <h3>Bruschetta</h3>
          <img src={bruchetta} alt="Bruschetta" />
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <span>$5.99</span>
          <button>Order a delivery</button>
        </article>

        <article>
          <h3>Lemon Dessert</h3>
          <img src={lemmonDessert} alt="Lemon Dessert" />
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient as been sourced and is as authentic as can be imagined.
          </p>
          <span>$5.00</span>
          <button>Order a delivery</button>
        </article>
      </section>

      {/* Testimonials */}
      <section>
        <h2>Testimonials</h2>
        <figure>
          <figcaption>Lucas</figcaption>
          <blockquote>The food was delicious!</blockquote>
          <img src={persona1} alt="Lucas" />
        </figure>

        <figure>
          <figcaption>Diana</figcaption>
          <blockquote>Fast and yummy!</blockquote>
          <img src={persona2} alt="Diana" />
        </figure>

        <figure>
          <figcaption>Chris</figcaption>
          <blockquote>Couldn't recommend it more.</blockquote>
          <img src={persona3} alt="Chris" />
        </figure>

        <figure>
          <figcaption>Matt</figcaption>
          <blockquote>Really good food.</blockquote>
          <img src={persona4} alt="Matt" />
        </figure>
      </section>

      {/* Final section */}
      <section>
        <h2>Little Lemon</h2>
        <p>
          Tucked away in the vibrant pulse of the city, the Little Lemon
          Restaurant stands as a beacon of gastronomic delight, paying homage to
          the tangy allure of the lemon. This enchanting eatery, with its
          sun-kissed yellow decor and whimsical lemon-themed art pieces,
          immediately transports guests to a Mediterranean orchard where the
          scent of citrus blossoms fills the air.
        </p>
        <figure>
          <img src={finalImage1} alt="Chefs at Little Lemon preparing food" />
          <img src={finalImage2} alt="A delicious dish from Little Lemon" />
        </figure>
      </section>
    </main>
  );
}

export default Main;
