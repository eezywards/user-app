// Navbar.js
import "../css/nav.css";
import "../css/main.css";

export default function Navbar() {
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          Eezywards
        </a>
        <div className="navigation-menu">
          <ul>
            <li>
              <a href=""><button class="button button1">Log in</button></a>
            </li>
            <li>
            <a href=""><button class="button button2">Sign Up</button></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  