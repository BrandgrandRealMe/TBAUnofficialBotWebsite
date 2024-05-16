import Link from "next/link";
import Image from "next/image";


const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use this bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            This FRC Team information tool, created by FRC member Brandon [@BrandgrandReal], allows other FRC members to easily access data from The Blue Alliance (<Link className="p-color" href="https://www.thebluealliance.com/" target="_blank" >TBA</Link>) and a custom database.  This one-stop shop for FRC team info puts valuable data at your fingertips!
            <br />
            <br />
            <div className="quote">
              "The bot is a great addition to any FRC related server. The ability to access The Blue Alliance (<Link className="p-color" href="https://www.thebluealliance.com/" target="_blank" >TBA</Link>) without having to leave discord is super helpful, especially when you are talking about teams current and past seasons."
              <br />
              <div className="quote-author">- dealwthit27</div>
            </div>
            <br />
            <div className="quote">
              "Great bot for FRC servers let's you see all different types of information without having to vist the website The Blue Alliance."
              <br />
              <div className="quote-author">- baileyc09</div>
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <h3 className="stat-header">Stats</h3>
          <div className="stats">
          <div className="stat">
          <img src="https://top.gg/api/widget/servers/1232768387399024732.svg?noavatar=true" />
          </div>
          <div className="stat">
          <img src="https://top.gg/api/widget/upvotes/1232768387399024732.svg?noavatar=true" />
          </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
