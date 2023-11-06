import React from 'react';

// Import images
import persona1 from "./assets/persona1.png";
import persona2 from "./assets/persona2.png";
import persona3 from "./assets/persona3.png";
import persona4 from "./assets/persona4.png";
import stars from "./assets/rating.png";

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: '4.5/5.0', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: '4.5/5.0', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: '4.5/5.0', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    
  },
  // More posts...
]

function Testimonials() {
  return (
    <div className="bg-primaryGreen py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className='text-white text-center'>Testimonials</h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between bg-white">
              <div className="flex self-center my-2 mx-2 gap-x-4 text-xs">
                <div className="relative flex self-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 self-center rounded-full bg-gray-50" />
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
                  <img src={stars} alt="" className="self-center h-8 rounded-full bg-transparent" />
                </a>
              </div>

              <div className="group relative mx-2">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="line-clamp-3 mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <time dateTime={post.datetime} className="mx-2 mb-2 text-sm text-gray-500">
                {post.date}
              </time>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials;

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