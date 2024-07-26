import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';


const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), { ssr: false });


const Contact = () => {
    const size = useWindowSize();

    return (
        <>
            <section className="contact-section" id="contact-section">
                <div className="contact-header">
                <h3 className="h-color">Contact Me</h3>
                </div>
                    <div className="contacts">
                        <Link className="h-color" target="_blank" href="mailto:tbaunofficialsupport@brandgrand.rocks">
                            <div className="contact">
                                <div className="icon"><FontAwesomeIcon icon={faAt} /></div><h5>tbaunofficialsupport@brandgrand.rocks</h5>
                            </div>
                        </Link>
                        <div className="contact">
                            <div className="icon"><FontAwesomeIcon icon={faDiscord} /></div><h5>@brandgrandreal</h5>
                        </div>
                        <Link className="h-color" target="_blank" href="https://discord.gg/rwzyj5AWpJ">
                            <div className="contact">
                                <div className="icon"><FontAwesomeIcon icon={faDiscord} /></div><h5>.gg/27qSubkcqV</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="discord-embed-header">
                    <h3 className="h-color">Talk on the Discord</h3>
                </div>
                    <div className="discord-embed">
                    <WidgetBot
                            server="1266439910945067028"
                            channel="1266440397882917060"
                            width={((53 / 100) * size.width).toFixed(0)}
                            height={500}
                        /> 
                    </div>
            </section>
        </>
    );
};

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  
export default Contact;
