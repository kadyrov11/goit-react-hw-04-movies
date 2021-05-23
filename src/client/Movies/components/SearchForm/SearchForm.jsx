import { Component } from 'react';

import styles from './SearchForm.module.css'


class SearchForm extends Component {
    state = {
        query:''
    }
    
    handleChange = ({ target }) => {
        const {name, value} = target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {onSubmit} = this.props
        onSubmit(this.state)
        this.resetState()
    }

    resetState = () => {
        this.setState({
            query: ''
        })
    }

    render() {
        const {handleChange, handleSubmit} = this
        return (
        <div className={styles.SearchContainer}>
         <form className={styles.SearchForm} onSubmit={handleSubmit}>
             <button type="submit" className={styles.SearchFormButton}>
             <span className={styles.SearchFormButtonLabel}>Search</span>
             </button>
             <input
             className={styles.SearchFormInput}
             name="query"
             type="text"
             autoComplete="off"
             autoFocus
             placeholder="Search movies"
             value={this.state.query}
             onChange={handleChange}
             />
         </form>
        </div>
        );
    }
}

export default SearchForm;