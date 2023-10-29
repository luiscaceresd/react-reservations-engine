import React from "react";

function Footer() {
  return (
    <footer>
      <section>
        <img src="./public/images/logo-big" alt="Little lemmon's logo"></img>
      </section>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <section>
        <h3>Contact</h3>
        <address>
          Address: <span>Your address here</span><br />
          Phone number: <span>Your phone number here</span><br />
          Email: <a href="mailto:your-email@example.com">your-email@example.com</a>
        </address>
      </section>
      <section>
        <h3>Social Media Links</h3>
        <address>
          Address: <span>Your social media address here</span><br />
          Phone number: <span>Your social media phone number here</span><br />
          Email: <a href="mailto:your-social-media-email@example.com">your-social-media-email@example.com</a>
        </address>
      </section>
    </footer>
  )
}

export default Footer;