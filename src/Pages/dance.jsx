import React from "react";
import '../styles/event-styles/dance_style.css';

function Dance() {
    return (
        <div>

            <header className="header">
                <h1>Rhythm and Flow</h1>
                <p className="small-text">Feel the music and enjoy the moves.</p>
            </header>

            <main className="wrapper">

                <div className="box">
                    <div className="img-box">
                        <img src="/images/dance-images/hiphop.jpg" alt="Hip Hop" className="pic" />
                    </div>
                    <div className="info">
                        <h2>Hip Hop Battle</h2>
                        <p>This event brings together hip hop dancers from the city. You will see fun battles, cool steps, and a lot of energy. Anyone who loves fast and powerful dance will enjoy this.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src="/images/dance-images/moderndance.jpg" alt="Modern Dance" className="pic" />
                    </div>
                    <div className="info">
                        <h2>Modern Dance Show</h2>
                        <p>This show has dancers who perform modern and creative styles. The moves are simple, smooth, and tell different stories. It is great to watch if you like expressive dancing.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src="/images/dance-images/classicaldance.jpg" alt="classNameical Dance" className="pic" />
                    </div>
                    <div className="info">
                        <h2>classNameical Night</h2>
                        <p>This event features beautiful classNameical dance pieces. The dancers perform with grace and focus. It is a calm and nice experience for anyone who enjoys traditional dance.</p>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default Dance;