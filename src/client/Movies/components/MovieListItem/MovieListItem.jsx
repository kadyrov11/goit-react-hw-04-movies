import {NavLink, withRouter} from 'react-router-dom'

import styles from './MovieListItem.module.css'

const MovieListItem = ({ poster_path, backdrop_path, title, original_title, id , name, location}) =>
    <li className={styles.movieListItem}>
        <NavLink  to={{pathname:`/movie/${id}`, state: { from: location} }} className={styles.movieListItemLink}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`} alt={title} className={styles.movieListItemImage}/>
            <p className={styles.movieListItemTitle}>{original_title || title || name}</p>
        </NavLink>
    </li>


export default withRouter(MovieListItem);

