import {withRouter} from 'react-router-dom'


import MovieListItem from '../MovieListItem'

import styles from "./MovieList.module.css"

const MovieList = ({ data, location }) => {
    const listItems = data.map(item => <MovieListItem {...item} key={item.id} location={location}/>)
    return (
        <div className={styles.movies}>
            <ul className={styles.movieList}>
                {listItems}
            </ul>
        </div>
    )
};

export default withRouter(MovieList);