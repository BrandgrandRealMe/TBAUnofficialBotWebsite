import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | TBAUnofficial</title>
        <meta
          name="description"
          content="Commands page | TBAUnofficial | Developed by FRC member Brandon [@BrandgrandReal] for other FRC members to fetch information from TBA and my own DB."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Just a Few Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
            TBA ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/teaminfo</kbd> -{" "}
                  <span className="p-color">Gets info from TBA on a team.</span>
                </li>
                <li>
                  <kbd>/awards</kbd> -{" "}
                  <span className="p-color">Gets a teams awards from TBA.</span>
                </li>
                <li>
                  <kbd>/getcad</kbd> -{" "}
                  <span className="p-color">Gets a teams cad for a robot.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              DB 🐛
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/robot</kbd> -{" "}
                  <span className="p-color">Get or Upload a robot picture.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Misc 👀
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/links</kbd> -{" "}
                  <span className="p-color">Get the bots links.</span>
                </li>
                <li>
                  <kbd>/ping</kbd> -{" "}
                  <span className="p-color">Check the bot's latency.</span>
                </li>
                <li>
                  <kbd>/servers</kbd> -{" "}
                  <span className="p-color">Get some FRC servers.</span>
                </li>
                <li>
                  <kbd>/stats</kbd> -{" "}
                  <span className="p-color">Get the bots stats.</span>
                </li>
                <li>
                  <kbd>/support</kbd> -{" "}
                  <span className="p-color">Get the invite to the Support server.</span>
                </li>
                <li>
                  <kbd>/topgg</kbd> -{" "}
                  <span className="p-color">Get info from the bots topgg.</span>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
