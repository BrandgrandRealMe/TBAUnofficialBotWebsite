import "@/styles/globals.scss";
import "@/styles/partials/_navbar.scss";
import "@/styles/partials/_showcase.scss";
import "@/styles/partials/_about.scss";
import "@/styles/partials/_license.scss";
import "@/styles/partials/_joinUs.scss";
import "@/styles/partials/_footer.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
