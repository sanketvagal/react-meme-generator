import React from "react";
import memesData from "../memesData";
import { useState } from "react";

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */
export default function Meme(props) {

    const [memeImage, setMemeImage] = useState("")

    const getMeme = () => {
        let memes = memesData.data.memes
        let memeUrl = memes[Math.floor(Math.random() * memes.length)].url
        setMemeImage(memeUrl)
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" />
                <button onClick={getMeme} className="form--button">Get a new image 😜</button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
    )

}