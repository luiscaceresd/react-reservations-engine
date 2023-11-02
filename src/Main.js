import React from "react";

function Main() {
  return (
    <main>
      {/* Restaurant description */}
      <section>
          <article>
            <h1>Little Lemon Miramichi</h1>
            <p>We are a family owned restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve A Table</button>
          </article>
          <figure>
            <img src="./assets/" alt="Image of Greek Salad"></img>
          </figure>
      </section>

      {/* Week's specials */}
      <section>
          <h2>This weeks specials!</h2>

          <article>
              <h3>Greek Salad</h3>
              <img src="path_to_image.jpg" alt="Image of Greek Salad"></img>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our classic-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <span>$12.99</span>
              <button>Order a delivery</button>
          </article>

          <article>
              <h3>Bruschetta</h3>
              <img src="path_to_image.jpg" alt="Image of Bruschetta"></img>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <span>$5.99</span>
              <button>Order a delivery</button>
          </article>

          <article>
              <h3>Lemon Dessert</h3>
              <img src="path_to_image.jpg" alt="Image of Lemon Dessert"></img>
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
              <img src="path_to_lucas_image.jpg" alt="Lucas' Profile Picture"></img>
          </figure>

          <figure>
              <figcaption>Diana</figcaption>
              <blockquote>Fast and yummy!</blockquote>
              <img src="path_to_diana_image.jpg" alt="Diana's Profile Picture"></img>
          </figure>

          <figure>
              <figcaption>Chris</figcaption>
              <blockquote>Couldn't recommend it more.</blockquote>
              <img src="path_to_chris_image.jpg" alt="Chris' Profile Picture"></img>
          </figure>

          <figure>
              <figcaption>Matt</figcaption>
              <blockquote>Really good food.</blockquote>
              <img src="path_to_matt_image.jpg" alt="Matt's Profile Picture"></img>
          </figure>
      </section>

      {/* Final section */}
      <section>
        <h2>Little Lemon</h2>
        <p>Tucked away in the vibrant pulse of the city, the Little Lemon Restaurant stands as a beacon of gastronomic delight, paying homage to the tangy allure of the lemon. This enchanting eatery, with its sun-kissed yellow decor and whimsical lemon-themed art pieces, immediately transports guests to a Mediterranean orchard where the scent of citrus blossoms fills the air.</p>
        <figure>
            <img src="path_to_chefs_image.jpg" alt="Chefs at Little Lemon preparing food"></img>
            <img src="path_to_dish_image.jpg" alt="A delicious dish from Little Lemon"></img>
        </figure>
      </section>
    </main>
  )
}

export default Main;