import React from "react";
import memesData from "../memesData";

export default function Meme(props) {

    const randoMeme = () => {
        let memes = memesData.data.memes
        console.log(memes[Math.floor(Math.random() * memes.length)].url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" />
                <button onClick={randoMeme} className="form--button">Get a new image 😜</button>
            </div>
        </main>
    )

}