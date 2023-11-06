import React from "react";
import Information from "./Information";
import Products from "./Products";

// Import images
import finalImage1 from "./assets/finalImage1.jpg";
import finalImage2 from "./assets/finalImage2.jpg";
import Testimonials from "./Testimonials";

function Main() {
  return (
    <main>
      {/* Restaurant description */}
      <Information/>

      {/* Week's specials */}
      <Products/>

      {/* Testimonials */}
      <Testimonials/>

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
