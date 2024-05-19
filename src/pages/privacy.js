import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Privacy() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
        >
            <Head>
                <title>Privacy Policy | TBAUnofficial</title>
                <meta
                    name="description"
                    content="Privacy Policy | TBAUnofficial | Developed by FRC member Brandon [@BrandgrandReal] for other FRC members to fetch information from TBA and my own DB."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="privacy">
            <div className="privacyText">
                <h2 className="center-text">Privacy Policy</h2>
                <p>Welcome to the privacy policy for TBAUnofficial, a discord bot developed with an emphasis on user privacy and data protection. This policy explains the types of information we collect from you, how we use it, how we protect it, and whether we disclose it to any outside parties.</p>
                <h3>What Information Do We Collect?</h3>
                <p>Your privacy is important to us, and we collect only the essential data needed for TBAUnofficial to function properly. At the core of our data collection, we gather the images and info that you give bot. This is the primary and sole type of information that we gather from you as a user.</p>
                <h3>How Do We Use Your Information?</h3>
                <p>The images that you upload are crucial to the functionality of TBAUnofficial. To facilitate this, we store these images in a separate database, ensuring that they serve their intended purpose within the discord channel. We wish to reassure you that your images are never used for any other purpose outside of the bot's functionality, adhering strictly to the principle of data minimization.</p>
                <h3>How Do We Protect Your Information?</h3>
                <p>Data security is at the forefront of our operations. We've put in place various security measures to maintain the safety of your personal data. Your images, for example, are stored in a secure database to which access is strictly limited. We continually monitor and update our security procedures to ensure the ongoing protection of your information.</p>
                <h3>Do We Disclose Any Information to Outside Parties?</h3>
                <p>We value your trust, and maintaining this trust means ensuring that your information remains confidential. We do not sell, trade, or otherwise transfer your information to outside parties. We believe in upholding our responsibility to protect your data, and this is a commitment we take seriously.</p>
                <p>By choosing to use TBAUnofficial, you consent to our Privacy Policy. We encourage you to review this policy periodically to stay informed about how we protect the personal information we collect. Your continued use of TBAUnofficial constitutes your agreement to this Privacy Policy and any updates.</p>
            </div>
            </div>
            <Footer />
        </motion.div>
    );
}
