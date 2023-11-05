import React from "react";
import Information from "./Information";
import Products from "./Products";

// Import images
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
      <Information/>

      {/* Week's specials */}
      <Products/>

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
