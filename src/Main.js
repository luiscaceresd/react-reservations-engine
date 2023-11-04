import React from "react";

// Import images
import mainImage from './assets/mainImage.jpg';
import greekSalad from './assets/greekSalad.jpg';
import bruchetta from './assets/bruchetta.png';
import lemmonDessert from './assets/lemmonDessert.jpg';
import persona1 from './assets/persona1.png';
import persona2 from './assets/persona2.png';
import persona3 from './assets/persona3.png';
import persona4 from './assets/persona4.png';
import finalImage1 from './assets/finalImage1.jpg';
import finalImage2 from './assets/finalImage2.jpg';

function Main() {
  return (
    <main>
      {/* Restaurant description */}
      <section>
          <article>
            <h1 className="text-3xl font-bold underline">Little Lemon Miramichi</h1>
            <p>We are a family owned restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve A Table</button>
          </article>
          <figure>
            <img src={mainImage} alt="Sushi dish" />
          </figure>
      </section>

      {/* Week's specials */}
      <section>
          <h2>This weeks specials!</h2>

          <article>
              <h3>Greek Salad</h3>
              <img src={greekSalad} alt="Greek Salad" />
              <p>The famous greek salad of crispy lettuce, peppers, olives and our classic-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <span>$12.99</span>
              <button>Order a delivery</button>
          </article>

          <article>
              <h3>Bruschetta</h3>
              <img src={bruchetta} alt="Bruschetta" />
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <span>$5.99</span>
              <button>Order a delivery</button>
          </article>

          <article>
              <h3>Lemon Dessert</h3>
              <img src={lemmonDessert} alt="Lemon Dessert" />
              <p>This comes straight from grandma's recipe book, every last ingredient as been sourced and is as authentic as can be imagined.</p>
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
        <p>Tucked away in the vibrant pulse of the city, the Little Lemon Restaurant stands as a beacon of gastronomic delight, paying homage to the tangy allure of the lemon. This enchanting eatery, with its sun-kissed yellow decor and whimsical lemon-themed art pieces, immediately transports guests to a Mediterranean orchard where the scent of citrus blossoms fills the air.</p>
        <figure>
            <img src={finalImage1} alt="Chefs at Little Lemon preparing food" />
            <img src={finalImage2} alt="A delicious dish from Little Lemon" />
        </figure>
      </section>
    </main>
  )
}

export default Main;
