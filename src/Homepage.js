import React, { useEffect } from "react";
import Information from "./Information";
import Products from "./Products";
import Description from "./Description";
import Testimonials from "./Testimonials";

function Homepage({ scrollTo }) {
    useEffect(() => {
      // If scrollTo has a value, try to find an element with that ID and scroll to it
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [scrollTo]);

    return (
        <main>
            {/* Restaurant description */}
            <div id="order-online">
            <Information />
            </div>

            {/* Week's specials */}
            <div id="menu">
              <Products />
            </div>
            {/* Testimonials */}
            <div id="login">
              <Testimonials />
            </div>

            {/* Final section */}
            <div id="description"> {/* Add id here for the scrolling target */}
                <Description />
            </div>
        </main>
    );
}

export default Homepage;
