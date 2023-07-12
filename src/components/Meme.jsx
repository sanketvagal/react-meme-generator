import React from "react";
import { useState, useEffect } from "react";

/**
 * Challenge: 
 * As soon as the Meme component loads the first time,
 * make an API call to "https://api.imgflip.com/get_memes".
 * 
 * When the data comes in, save just the memes array part
 * of that data to the `allMemes` state
 * 
 * Think about if there are any dependencies that, if they
 * changed, you'd want to cause to re-run this function.
 * 
 * Hint: for now, don't try to use an async/await function.
 * Instead, use `.then()` blocks to resolve the promises
 * from using `fetch`. We'll learn why after this challenge.
 */

export default function Meme(props) {

    const [meme, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState({})

    useEffect(function () {
        console.log("Effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const memeUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url
        setMemeImage(prevMeme => ({ ...prevMeme, randomImage: memeUrl }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMemeImage(prevMeme => ({ ...prevMeme, [name]: value }))
    }

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