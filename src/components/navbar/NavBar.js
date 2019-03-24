import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
    <a className="navbar-brand" href="/">Alec Robinson</a>


    <ul className="nav justify-content-end">
        <li className="nav-item">
            <a class="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/contact">Contact </a>
        </li>

    </ul>

</nav>
  );
}

export default NavBar;
