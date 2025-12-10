import React from "react";
// import "../styles/event-styles/music_style.css";

function Music() {
    return (
        <div>

            <header className="header">
                <h1>Sound and Soul</h1>
                <p className="small-text">Enjoy music from different styles.</p>
            </header>

            <main className="wrapper">

                <div className="box">
                    <div className="img-box">
                        <img src="./images/music-images/rock.jpg"
                            alt="Rock band performing live" className="pic" />
                    </div>
                    <div className="info">
                        <h2>Rock Music Fest</h2>
                        <p>This event is full of loud energy and fun performances. Rock bands come together to play their best songs with strong guitar and drum sounds. It is great for anyone who enjoys fast and powerful music.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src="./images/music-images/jazz.jpeg"
                            alt="Jazz musicians playing" className="pic" />
                    </div>
                    <div className="info">
                        <h2>Evening Jazz Night</h2>
                        <p>This show has calm and relaxing music played by jazz musicians. You will hear smooth tunes, light drums, and creative solos. It is a nice event for people who like peaceful and soulful music.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img-box">
                        <img src="./images/music-images/orchestra.jpg"
                            alt="Orchestra performance" className="pic" />
                    </div>
                    <div className="info">
                        <h2>Orchestra Performance</h2>
                        <p>This event features a full group of musicians playing classNameical pieces. The music is strong, emotional, and very detailed. It is a good choice for people who enjoy traditional and slow music.</p>
                    </div>
                </div>

            </main>

        </div>
    )
}

export default Music;