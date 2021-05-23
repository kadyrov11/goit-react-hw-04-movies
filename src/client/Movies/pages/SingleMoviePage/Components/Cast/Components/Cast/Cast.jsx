import { Component } from 'react';
import axios from 'axios'

import CastList from '../CastList'

class Cast extends Component {
    state = {
        cast:[]
    }
    
    componentDidMount() {
        const {movieId} = this.props.match.params
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=923c2cf88ec4338da74c768a045101f0`).then(
            ({data}) => this.setState({ cast: data.cast })
        )
    }

    render() {
     const {cast} = this.state

        return (
            <CastList data={cast} />
        );
    }
}

export default Cast;