import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../utils/images/TBAgold.png";


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
                    width={100}
                    height={100}
                    alt="TBA logo but gold"
                    className="Logo circle"
                  />{" "}
        <h1 className="showcase-header h-color">TBAUnofficial</h1>
        <h2 className="showcase-header-text h-color">
          The only FRC or TBA discord bot you need!
        </h2>
        <p className="showcase-para p-color">
          One of the awesome discord bot with tons of commands that will fill
          your TBA and FRC needs in your discord server.
        </p>

        <span className="p-color">Bot is probably online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1232012960692568065&permissions=68608&scope=bot+applications.commands">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/27qSubkcqV">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
