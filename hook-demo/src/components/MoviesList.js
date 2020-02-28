import React, { useState, useEffect } from 'react'
import NewMovieForm from './NewMovieForm';

const MoviesList = () => {

    const [movies, setMovies] = useState([
        { title: "Super Man", id: 1 },
        { title: "Spider Man", id: 2 },
        { title: "Bat Man", id: 3 },
    ]);

    const [age, setAge] = useState(20);

    const addMovie = (title) => {
        setMovies([...movies,{title: title, id: 4}]);
    }

    useEffect(() => {
        console.log("Movies Added");
    }, [movies])

    useEffect(()=> {
        console.log("age updated")
    }, [age]);

    return (
        <React.Fragment>
            <ul>
                {
                    movies.map((movie) => {
                        return (
                            <li>
                                {movie.title}
                            </li>
                        )

                    }
                    )}
            </ul>

            <NewMovieForm addMovie={addMovie}/>

                <button onClick={()=> {setAge(age + 1)}}>{age}</button>

        </React.Fragment>
        
        
    )
}

export default MoviesList;