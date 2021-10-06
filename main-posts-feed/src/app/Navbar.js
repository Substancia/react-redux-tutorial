import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>
  <nav>
    <section>
      <h1>React Redux Posts Feed Example</h1>
      <div>
        <Link to='/'>Posts</Link>
      </div>
    </section>
  </nav>

export default Navbar;