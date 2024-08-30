import { useState } from "react"

const useMovies = () => {
    const [movies, setMovies] = useState([]);


    return { movies }
}

export default useMovies