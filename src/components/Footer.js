import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";
import Logo from "../utils/images/TBAgold.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
          <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt="Bot logo"
                    className="botLogo circle"
                  />
            <ul>
              <li>
                <Link className="h-color" href="/">
                  TBAUnofficial
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Bot is probably online!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/commands">
                  /commands
                </Link>
              </li>
              <li>
                <Link target="_blank" className="p-color" href="https://discord.gg/rwzyj5AWpJ">
                  /support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="/license">
                  /license
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Created with ❤️ by{" "}
              <Link
                href="https://github.com/BrandgrandRealMe"
                className="h-color no-decoration"
              >
                BrandgrandReal (Brandon)
              </Link>
            </p>
            <p className="p-color">{year} <FontAwesomeIcon icon={faCopyright} /> All rights reserved! <Link className="p-color no-decoration" href="/license" >GNU General Public License</Link></p>
          </div>
          <div className="footer-sec2-link">
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://github.com/BrandgrandRealMe/TBAUnofficialDiscordBot"
            >
              /source-code
            </Link>
            <Link
              className="p-color no-decoration"
              href="/privacy"
            >
              /privacy
            </Link>
            <Link
              className="p-color no-decoration"
              href="/tos"
            >
              /tos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
