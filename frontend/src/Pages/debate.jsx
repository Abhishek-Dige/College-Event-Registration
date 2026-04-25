import React from "react";
import "../styles/event-styles/events_page.css";

function Debate() {
    return (
        <div className="events-page">

            <header className="header">
                <h1>Arguments and Ideas</h1>
                <p className="small-text">Learn and share different viewpoints.</p>
            </header>

            <main className="wrapper">

                <div className="box">
                    <div className="img-box">
                        <img src="./images/debate-images/parliament.jpg"
                            alt="People debating" className="pic" />
                    </div>
                    <div className="info">
                        <h2>Parliamentary Debate</h2>
                        <p>This debate is very fast and interesting to watch. The teams get the topic just a few minutes before they speak. They have to think quickly and make strong points on the spot. It is a fun event for anyone who enjoys quick talking and sharp ideas.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src="./images/debate-images/lincoln.jpg"
                            alt="Two people discussing" className="pic" />
                    </div>
                    <div className="info">
                        <h2>Lincoln-Douglas Debate</h2>
                        <p>This is a one-person vs one-person debate. Instead of facts or policies, it focuses more on what is right and wrong. The speakers talk about ideas like fairness and justice. It is simple to follow and good for people who like moral topics.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src="./images/debate-images/policy.jpg"
                            alt="Research books and papers" className="pic" />
                    </div>
                    <div className="info">
                        <h2>Policy Debate</h2>
                        <p>This debate is all about facts, research, and detailed information. Two teams argue about a major government policy change. They use statistics, reports, and evidence to support their points. It is great for people who enjoy reading and researching topics deeply.</p>
                    </div>
                </div>

            </main>

        </div>
    )
}
export default Debate;