import React from "react";
import memesData from "../memesData";
import { useState } from "react";

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 * 
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 * 
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 * 
 * Lastly, update the `getMemeImage` function and the markup 
 * to reflect our newly reformed state object and array in the
 * correct way.
 */
export default function Meme(props) {

    const [meme, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        let memes = allMemeImages.data.memes
        let memeUrl = memes[Math.floor(Math.random() * memes.length)].url
        setMemeImage(prevMeme => ({ ...prevMeme, randomImage: memeUrl }))
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" />
                <button onClick={getMemeImage} className="form--button">Get a new image 😜</button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )

}