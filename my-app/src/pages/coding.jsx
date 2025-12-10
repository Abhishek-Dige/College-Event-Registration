import React from "react";
// import "../styles/event-styles/coding_style.css"

function Coding() {
    return (
        <div>

            <header className="header_box">
                <h1>Code & Compete</h1>
                <p className="small_tag">Showcase your programming skills.</p>
            </header>

            <main className="main_section">

                <div className="event_card">
                    <img src="./images/coding-images/hacktoberfest.jpg"
                        alt="Source code on a screen" className="pic" />
                        <div className="info_box">
                            <h2>Hacktoberfest</h2>
                            <p>Hacktoberfest is a month-long global event held every October to promote open-source contributions. Participants submit pull requests, support projects, and earn rewards such as T-shirts or digital badges.</p>
                        </div>
                </div>

                <div className="event_card">
                    <img src="./images/coding-images/codefiesta.jpg"
                        alt="Computer setup for coding" className="pic" />
                        <div className="info_box">
                            <h2>Codefiesta</h2>
                            <p>Codefiesta is a high-energy competitive coding event where participants solve problems under time pressure. It tests logic, speed, and accuracy, making it a great way to sharpen coding skills.</p>
                        </div>
                </div>

                <div className="event_card">
                    <img src="./images/coding-images/codeclash.jpg"
                        alt="Matrix-style coding screen" className="pic" />
                        <div className="info_box">
                            <h2>Codeclash</h2>
                            <p>Codeclash is our college's official programming contest. Participants solve algorithmic challenges, and the final rank list helps them understand their strengths and areas to improve in competitive programming.</p>
                        </div>
                </div>

            </main>

        </div>
    )
}

export default Coding;