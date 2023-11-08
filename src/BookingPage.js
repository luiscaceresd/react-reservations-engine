import React from "react";

// Import images
import finalImage1 from "./assets/finalImage1.jpg";
import finalImage2 from "./assets/finalImage2.jpg";
import reservationIcon from "./assets/calendar.png";
import cartIcon from "./assets/shopping-cart.png";
import deliveryIcon from "./assets/free-delivery.png";


const features = [
  {
    name: "Online Reservations.",
    description:
      "Book your spot in just a few clicks! Our intuitive online reservation system makes it easy to secure your place at our venue anytime, anywhere.",
    icon: reservationIcon,
  },
  {
    name: "Order Online.",
    description:
      "Enjoy the convenience of online ordering! Browse our digital menu, make your selection, and order your favorites right from your device.",
    icon: cartIcon,
  },
  {
    name: "Free Shiping.",
    description:
      "We deliver your goods without the extra costs. Our free shipping service ensures that your order arrives at your doorstep swiftly and without any shipping fees.",
    icon: deliveryIcon,
  },
];

function BookingPage() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-14 border-y-2 border-primaryGreen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="self-align">
            <div className="lg:max-w-lg">
              <h1 className="text-primaryYellow sm:flex sm:justify">
                Little Lemon
              </h1>
              <h2 className="text-secondaryBlack mb-6  sm:flex sm:justify">
                Miramichi
              </h2>
              <p className="text-lg leading-8 text-secondaryBlack text-justify">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <dl className="mt-6 max-w-xl space-y-4 text-base leading-7 text-gray-700 text-justify lg:max-w-none">
                {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline text-justify font-semibold text-gray-900">
                        <img
                          src={feature.icon}
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                          alt={`${feature.name} icon`}
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          </div>
          <img
            src={finalImage1}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] md:-ml-4 lg:-ml-0 md:object-scale-down"
            width={2432}
            height={1200}
          />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
