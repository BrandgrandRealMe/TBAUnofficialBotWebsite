import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function TOS() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
        >
            <Head>
                <title>TOS | Coopertron</title>
                <meta
                    name="description"
                    content="TOS | Coopertron | Developed by FRC member Brandon [@BrandgrandReal] for other FRC members to fetch information from TBA and my own DB."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="tos">
                <div className="tosText">
                    <h2 className="center-text">Terms of Service</h2>
                    <ol>
                        <li><b>Acceptance of Terms:</b> This document outlines the terms and conditions of using the Coopertron Discord bot. By accessing, installing, or using the Coopertron Discord bot, you are agreeing to abide by these terms and conditions. If you do not agree with any of these stipulations, you are prohibited from using this bot.</li>
                        <li><b>Functionality and Usage:</b> The Coopertron bot is designed to pull data from a website called TBA and facilitate users in uploading images to a proprietary database. The bot is provided as is, and its usage is subject to these terms of service. You agree not to misuse the bot or use it for any illegal or unauthorized purposes.</li>
                        <li><b>Conduct:</b> Users are required to interact with the bot in a responsible and legal manner. Uploading any form of inappropriate, offensive, or unlawful content is strictly prohibited. Should any user be found in violation of this rule, they may be subject to penalty as specified by the bot's administrators.</li>
                        <li><b>Privacy Policy:</b> We hold user privacy in high regard. Any data that the bot pulls from TBA or any images users upload to the database are strictly for the bot's functionality. This data will not be shared with third parties without explicit user consent. We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.</li>
                        <li><b>Limitation of Liability:</b> The creators and maintainers of the Coopertron bot shall not be held responsible or liable for any damage, loss of data, or other unforeseen consequences that may occur as a direct or indirect result of using this bot. Users are advised to use the bot at their own risk.</li>
                        <li><b>Changes to Terms:</b> We reserve the right to revise, amend, or modify these terms and conditions at any time without prior notice. All changes will be effective upon posting on the relevant platform, and your continued use of the bot signifies your acceptance of these changes.</li>
                    </ol>
                    <br />
                    <p>By using the Coopertron bot, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
}
