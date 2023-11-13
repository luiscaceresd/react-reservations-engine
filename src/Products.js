import React from 'react';

import greekSalad from "./assets/greekSalad.jpg";
import bruchetta from "./assets/bruchetta.png";
import lemmonDessert from "./assets/lemmonDessert.jpg";

const products = [
  {
    id: 1,
    name: 'Greek Salad',
    href: '#',
    imageSrc: greekSalad,
    imageAlt: "Greek salad with a fork",
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
  },
  {
    id: 2,
    name: 'Bruschetta',
    href: '#',
    imageSrc: bruchetta,
    imageAlt: "Bruchetta served in a black plate",
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled fresh bread that has been smeared with garlic and seasoned with salt, classic-style feta cheese and olive oil.',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    href: '#',
    imageSrc: lemmonDessert,
    imageAlt: "Lemon dessert with a fork.",
    price: '$5.00',
    description: "This comes straight from grandma's recipe book, every last ingredient as been sourced and is as authentic as can be imagined.",
  },
  // More products...
]

function Information() {
  return (
    <section className="bg-white">
      <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
      <h2 className='text-center'>This weeks specials!</h2>
        <article className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
          {products.map((product) => (
            <div className="group relative bg-secondaryGray" key={product.id}>
              <div className="group-hover:opacity-75 transition aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 mx-2 flex justify-between">
                <div>
                  <h3 className="text-lead text-secondaryBlack font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0 " />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-bold text-secondaryOrange">{product.price}</p>
              </div>
              <div className="mt-1 text-sm mx-2">{product.description}</div>
              <button className="mt-4 block w-full bg-primaryGreen border border-transparent rounded-md py-2 text-base font-bold text-white group-hover:bg-primaryYellow group-hover:text-secondaryBlack">
                Order a delivery
              </button>
            </div>
          ))}
        </article>
      </article>
    </section>
  )
}

export default Information;