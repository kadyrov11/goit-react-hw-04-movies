import { Component } from 'react'
import {Redirect} from "react-router-dom"
import axios from 'axios'

import MovieList from '../../components/MovieList'
import SearchForm from '../../components/SearchForm'

class MoviesPage extends Component {
    state = {
        movies: [],
        query: '',
        loading: false,
        submit: false
    }

    componentDidMount() {
        const { search } = this.props.location
     const  QUERY = search.slice(7)
        if (QUERY) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=923c2cf88ec4338da74c768a045101f0&query=${QUERY}`)
                .then(({ data }) => {
                this.setState(({movies}) => ({ movies: [...movies, ...data.results],  loading: false, submit: false }))
            })
        }

    }

    componentDidUpdate() {
     const { loading, query} = this.state
        if (loading) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=923c2cf88ec4338da74c768a045101f0&query=${query}`)
                .then(({ data }) => {
                this.setState(({movies}) => ({ movies: [...movies, ...data.results],  loading: false, submit: false, text: 'The film is not found' }))
            })
      }
    }
    
    queryRequest = ({ query }) => {
    this.setState({
      movies: [],
      query: query,
      loading: true,
      submit: true,
      text: ''
     })
   }
   
    render() {
     const {queryRequest} = this
        const { movies, submit, query, text } = this.state
     if(submit){
      const redirectOptions = {
        pathname: "/movie",
        search: `?query=${query}`
       };
       return <Redirect to={redirectOptions}/>
     }
        return (
            <>
                <SearchForm onSubmit={queryRequest} />
                {movies.length > 0  ? <MovieList data={movies} /> : <p style={{
                    width: '1200px',
                    backgroundColor: '#a11717',
                    margin: '0 auto',
                    borderRadius: "5px",
                    fontSize: "30px",
                    textAlign: 'center',
                    color: 'aliceblue'
                }} >{text}</p>}
            </>
        );
    }
}

export default MoviesPage;