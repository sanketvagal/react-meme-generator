import React from "react";
import { useState, useEffect } from "react";

/**
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:
*/

export default function Meme(props) {

    const [meme, setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState({})

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
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