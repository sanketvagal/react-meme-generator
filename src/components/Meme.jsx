import React from "react";
import memesData from "../memesData";
import { useState } from "react";

/**
    * Challenge: 
    * 1. Set up the text inputs to save to
    *    the `topText` and `bottomText` state variables.
    * 2. Replace the hard-coded text on the image with
    *    the text being saved to state.
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

    function handleChange(event) {
        const { name, value } = event.target
        setMemeImage(prevMeme => ({ ...prevMeme, [name]: value }))
    }
    console.log(meme)
    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input" onChange={handleChange} name="topText" value={meme.topText} />
                <input type="text" placeholder="Bottom text" className="form--input" onChange={handleChange} name="bottomText" value={meme.bottomText} />
                <button onClick={getMemeImage} className="form--button">Get a new image 😜</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )

}