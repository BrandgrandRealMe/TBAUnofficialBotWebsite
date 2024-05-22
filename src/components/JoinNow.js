import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!{" "}
        </div>
        <div className="joinUs-buttons">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1232012960692568065&permissions=68608&scope=bot+applications.commands">
              Invite now!
            </Link>
          </button>
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/27qSubkcqV">
              Join Server!
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default JoinNow;
