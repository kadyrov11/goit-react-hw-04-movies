import { Component, lazy, Suspense} from 'react'
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import axios from 'axios'

import Genres from '../Genres'
// import Cast from '../Cast/Components/Cast'
// import Review from '../Review/Components/Review'

import styles from './SingleMoviePage.module.css'

import PropTypes from 'prop-types';

const Cast = lazy(() => import('../Cast/Components/Cast'))
const Review = lazy(() => import('../Review/Components/Review'))

class SingleMoviePage extends Component {
    state = {
        movie: {},
        genres: [],
        from: '/movie'
    }
    componentDidMount() {
        const { movieId } = this.props.match.params
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=923c2cf88ec4338da74c768a045101f0`).then(
            ({ data }) => this.setState({ movie: { ...data }, genres: data.genres })
            )
        const {state} = this.props.location
        if (state) {
            const {pathname, search} = state.from
            this.setState({from: `${pathname}${search}`})
        }
    }

    render() {
        const {poster_path, backdrop_path, title, original_title, vote_average, overview, name } = this.state.movie
        const { url } = this.props.match
        const { genres, from } = this.state
        return (
        <>
        <div className={styles.goBackContainer}><NavLink to={from} ><button className={styles.goBack}>Go back</button></NavLink></div>
        <div className={styles.container} >
        <div className={styles.imgContainer}>
            <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
        alt={title} />
        </div>
        <div className={styles.filmInfoContainer} >
            <h2 className={styles.filmTitle} >{original_title || name || title}</h2>
            <ul className={styles.filmInfoList} >
               <li className={styles.filmInfoItem} >
                    <span className={styles.filmInfo}>User score </span>
                    <span className={styles.filmInfoContent}>{vote_average}</span>
                </li>
                <li className={styles.filmInfoItem}>
                    <span className={styles.filmInfo}>Overview </span>
                    <span className={styles.filmInfoContent}>{overview}</span>
                </li>
                <li className={styles.filmInfoItem}>
                    <span className={styles.filmInfo}>Genre </span>
                            <Genres data={genres}/>
                </li>
            </ul>
        </div>
        </div>
        <div className={styles.addInfo}>
            <span className={styles.addInfoText}>Additional information: </span>
            <ul className={styles.addInfoList}>
                <li className={styles.addInfoItem}><NavLink className={styles.addInfoLink} activeClassName={styles.active} to={`${url}/cast` }>Cast</NavLink></li>
                <li className={styles.addInfoItem}><NavLink className={styles.addInfoLink} activeClassName={styles.active} to={`${url}/review`}>Review</NavLink></li>
            </ul>
        </div>
        
        <Suspense fallback={<p>LOADING...</p>}>
        <Switch>
            <Route path="/movie/:movieId/cast"  component={Cast} />  
            <Route path="/movie/:movieId/review"  component={Review} /> 
        </Switch>
        </Suspense>
        
        </>
        );
    }
}

export default SingleMoviePage;