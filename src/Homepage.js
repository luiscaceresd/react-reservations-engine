import React from "react";
import Information from "./Information";
import Products from "./Products";
import Description from "./Description";

import Testimonials from "./Testimonials";

function Homepage() {
  return (
    <main>
      {/* Restaurant description */}
      <Information/>

      {/* Week's specials */}
      <Products/>

      {/* Testimonials */}
      <Testimonials/>

      {/* Final section */}
      <Description/>
    </main>
  );
}

export default Homepage;
