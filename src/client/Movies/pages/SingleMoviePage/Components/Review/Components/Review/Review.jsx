import { Component } from 'react';
import axios from 'axios'

import ReviewList from '../ReviewList'

import styles from './Review.module.css'

class Review extends Component {
    state = {
        review: [],
    }
    
    componentDidMount() {
        const {movieId} = this.props.match.params
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=923c2cf88ec4338da74c768a045101f0`).then(
            // ({ data }) => console.log(data)
            ({ data }) => this.setState({ review: [...data.results] })
        )
    }

    render() {
     const {review} = this.state

        return (
            <div className={styles.container} >
                <h2>Reviews: </h2>
                {review.length > 0 ? <ReviewList data={review} /> : <p>There is not any review for this film</p>}
            </div>
        );
    }
}

export default Review;