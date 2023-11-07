import React from "react";
import Information from "./Information";
import Products from "./Products";
import Description from "./Description"; 

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
      <Description/>
    </main>
  );
}

export default Main;
