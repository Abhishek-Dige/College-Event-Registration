import React from "react";
import "../styles/event-styles/events_page.css";

function Coding() {
    return (
        <div className="events-page">

            {/* HEADER */}
            <header className="header">
                <h1>Code & Compete</h1>
                <p className="small-text">Showcase your programming skills.</p>
            </header>

            {/* MAIN WRAPPER */}
            <main className="wrapper">

                {/* CARD 1 */}
                <div className="box">
                    <div className="img-box">
                        <img
                            src="/images/coding-images/hacktoberfest.jpg"
                            alt="Source code on a screen"
                            className="pic"
                        />
                    </div>

                    <div className="info">
                        <h2>Hacktoberfest</h2>
                        <p>
                            Hacktoberfest is a month-long global event held every October to
                            promote open-source contributions. Participants submit pull requests,
                            support projects, and earn rewards such as T-shirts or digital badges.
                        </p>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="box">
                    <div className="img-box">
                        <img
                            src="/images/coding-images/codefiesta.jpg"
                            alt="Computer setup for coding"
                            className="pic"
                        />
                    </div>

                    <div className="info">
                        <h2>Codefiesta</h2>
                        <p>
                            Codefiesta is a high-energy competitive coding event where
                            participants solve problems under time pressure. It tests logic,
                            speed, and accuracy, making it a great way to sharpen coding skills.
                        </p>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="box">
                    <div className="img-box">
                        <img
                            src="/images/coding-images/codeclash.jpg"
                            alt="Matrix-style coding screen"
                            className="pic"
                        />
                    </div>

                    <div className="info">
                        <h2>Codeclash</h2>
                        <p>
                            Codeclash is our college's official programming contest.
                            Participants solve algorithmic challenges, and the final
                            rank list helps them understand strengths and areas to improve
                            in competitive programming.
                        </p>
                    </div>
                </div>

            </main>

        </div>
    );
}

export default Coding;
