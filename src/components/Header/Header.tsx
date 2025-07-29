import { Link } from "react-router-dom";
import { data } from "../../shared/data/navbar.data";
import { Navbar } from "./Navbar";
import { CartWidget } from "./CartWidget";

let logo;

export function Header() {
  return (
    <header>
      <img src={logo} alt="Logotype" />
      <Navbar data={data} />
      <div>
        <ul>
          <li>
            <Link to="/auth/login">Sign In</Link>
          </li>
          <li>
            <Link to="/auth/register">Create An Account</Link>
          </li>
        </ul>
        <div>
          <Link to="/account/:id/wishlist"></Link>
          <CartWidget />
        </div>
      </div>
    </header>
  );
}
