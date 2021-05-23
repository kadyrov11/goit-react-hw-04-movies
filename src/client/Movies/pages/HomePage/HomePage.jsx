import { Component } from 'react'
import axios from 'axios'

import MovieList from '../../components/MovieList'

class HomePage extends Component {
    state = {
        movies: [],
        loading: false,
        error: null,
        page: 1
    }
    componentDidMount() {
        this.setState({loading: true})
    }
    componentDidUpdate() {
        const { loading, page } = this.state
        
        if (loading) {
            axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=923c2cf88ec4338da74c768a045101f0&page=${page}`)
                .then(({ data }) => {
                    this.setState(({movies}) => ({ movies: [...movies, ...data.results],  loading: false }))
                })
        }
    }
    render() {
        const {movies} = this.state
        return (
            <>
                <MovieList data={movies}/>
            </>
        );
    }
}

export default HomePage;