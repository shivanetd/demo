import React, {useState} from 'react'

function NewMovieForm(props) {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addMovie(title);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                lable
            </label>
            <input value={title} onChange={(e) => { setTitle(e.currentTarget.value)}} type="text">
            </input>
            <input type="submit"></input>
        </form>
    )
}

export default NewMovieForm
