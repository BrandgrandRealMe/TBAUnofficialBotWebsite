import Link from "next/link";
import Image from "next/image";
import Logo from "../utils/images/TBAgold.png";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
        <Image
                    src={Logo}
                    width={100}
                    height={100}
                    alt="TBA logo but gold"
                    className="Logo circle"
                  />{" "}
          <ul>
            <li>
              <Link className="h-color" href="/">
                TBAUnofficial
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                /home
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/commands">
                /commands
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://github.com/BrandgrandRealMe/TBAUnofficialDiscordBot"
                target="_blank"
              >
                /source-code
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
