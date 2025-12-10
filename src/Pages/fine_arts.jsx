import React from "react";
import "../styles/event-styles/fine_arts_style.css";

function FineArts() {
    return (
        <div>
            <header className="header_box">
                <h1>Fine Arts Showcase</h1>
                <p className="small_tag">Enjoy different forms of creativity.</p>
            </header>
            <main className="main_section">
                <div className="event_card">
                    <img src="./images/fineart-images/painting.jpg" alt="Painting artwork" className="pic" />
                        <div className="info_box">
                            <h2>Painting Display</h2>
                            <p>This event shows many nice paintings made using different styles. You can see bright colors, simple drawings, and artwork that tells small stories. It’s a calm place to enjoy art made on canvas.</p>
                        </div>
                </div>
                <div className="event_card">
                    <img src="./images/fineart-images/sculpture.jpg" alt="Sculpture art" className="pic" />
                        <div className="info_box">
                            <h2>Sculpture Walk</h2>
                            <p>Here you can see sculptures made from stone, clay, and metal. Each piece has its own shape and design. Walking through this area lets you see how artists create 3D art with their hands.</p>
                        </div>
                </div>
                <div className="event_card">
                    <img src="./images/fineart-images/drawing.jpg" alt="Pencil sketch" className="pic" />
                        <div className="info_box">
                            <h2>Drawing Corner</h2>
                            <p>This section has pencil sketches made by skilled artists. The drawings show people, objects, and scenes made using simple lines and shading. It’s great for people who like classNameic hand-drawn art.</p>
                        </div>
                </div>
            </main>
        </div>
    )
}
export default FineArts;