import React from "react";
// import "../styles/event-styles/drama_style.css";

function Drama() {
    return (
        <div>

            <header className="header">
                <h1>Act & Scene</h1>
                <p className="tagline">Witness the power of storytelling.</p>
            </header>

            <main className="wrapper">

                <div className="box">
                    <img src="./images/drama-images/evening.jpg"
                        alt="Tragic theatre performance" className="pic" />
                        <div className="info">
                            <h2>An Evening of Tragedy</h2>
                            <p>This play explores deep emotions such as loss, ambition, and fate. It shows how our choices affect our lives. The performance is emotional and powerful.</p>
                        </div>
                </div>

                <div className="box">
                    <img src="./images/drama-images/comedy.jpg"
                        alt="Comedy theatre" className="pic" />
                        <div className="info">
                            <h2>A Night of Comedy</h2>
                            <p>This fun drama is full of jokes, misunderstandings, and funny situations. It is light-hearted, fast-paced, and sure to make you laugh.</p>
                        </div>
                </div>

                <div className="box">
                    <img src="./images/drama-images/modern.jpg"
                        alt="Modern drama on stage" className="pic" />
                        <div className="info">
                            <h2>The Modern Stage</h2>
                            <p>This drama focuses on real-life problems and relationships. It is emotional and relatable, showing the struggles people face in everyday life.</p>
                        </div>
                </div>

            </main>

        </div>
    )
}

export default Drama;