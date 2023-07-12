import React from "react"

export default function App() {

    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            confpass: "",
            news: ""
        })
    // console.log(formData)    
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        if (formData.password != formData.confpass) {
            console.log("passwords to not match")
        } else {
            console.log("Successfully signed up")
            if (formData.news) {
                console.log("Thanks for signing up for our newsletter!")
            }
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    className="form--input"
                    value={formData.email}
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="form--input"
                    value={formData.password}
                    name="password"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    className="form--input"
                    value={formData.confpass}
                    name="confpass"
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.news}
                        name="news"
                        onChange={handleChange}

                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
