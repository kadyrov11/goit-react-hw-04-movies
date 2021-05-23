import styles from './Genres.module.css'

const Genres = ({ data }) => {
    const genre = data.map(({name, id}) => <li key={id} className={styles.text} >{name}</li>)

    return (
        <ul>
            {genre}
        </ul>
    )
};

export default Genres;