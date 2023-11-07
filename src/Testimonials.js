import React from "react";

// Import images
import persona1 from "./assets/persona1.png";
import persona2 from "./assets/persona2.png";
import persona3 from "./assets/persona3.png";
import stars from "./assets/rating.png";

const posts = [
  {
    id: 1,
    title: "Hidden Gem in Canada",
    href: "#",
    description: "The food was delicious!",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "4.5/5.0", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Entrepeneur",
      href: "#",
      imageUrl: persona1,
    },
  },
  {
    id: 2,
    title: "Mediterranean food at its finest",
    href: "#",
    description: "Fast and yummy!",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "4.5/5.0", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Food Critic",
      href: "#",
      imageUrl: persona2,
    },
  },
  {
    id: 3,
    title: "Fast and beautiful website",
    href: "#",
    description: "Couldn't recommend it more.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "4.5/5.0", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Traveler",
      href: "#",
      imageUrl: persona3,
    },
  },
  // More posts...
];

function Testimonials() {
  return (
    <section className="bg-primaryGreen py-14 sm:py-14 border-y-2 border-primaryGreen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-secondaryGray text-center">Testimonials</h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex max-w-xl flex-col items-start justify-between bg-white hover:shadow-lg hover:shadow-secondaryBlack border rounded-md p-6"
            >
              <div className="flex self-center my-2 mx-2 gap-x-4 text-xs">
                <div className="relative flex self-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 self-center rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-sm text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">{post.author.role}</p>
                  </div>
                </div>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full self-center bg-secondaryGray px-3 py-1.5 font-medium text-gray-600 hover:bg-secondaryBlack"
                >
                  <img
                    src={stars}
                    alt=""
                    className="self-center h-8 rounded-full bg-transparent"
                  />
                </a>
              </div>

              <div className="group relative mx-2">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <time
                dateTime={post.datetime}
                className="mx-2 mb-2 text-sm text-gray-500"
              >
                {post.date}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;