import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../utils/images/PFP.png";


const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
      <Image
                    src={Logo}
                    alt="TBA logo but gold"
                    className="Logo circle"
                  />{" "}
        <h1 className="showcase-header h-color"><hl>Coop</hl>ertron</h1>
        <h2 className="showcase-header-text h-color">
          The only <b>FRC</b> or <b>TBA</b> discord bot you need!
        </h2>
        <p className="showcase-para p-color">
          Developed by FRC member Brandon [@BrandgrandReal] for other FRC members to fetch information from TBA and my own DB.
        </p>
        <div className="showcase-btns">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1232012960692568065&permissions=68608&scope=bot+applications.commands">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/rwzyj5AWpJ">
              Join server!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://ko-fi.com/brandonthedev">
              Donate!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
