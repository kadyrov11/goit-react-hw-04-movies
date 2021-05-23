import styles from './CastListItem.module.css'

const CastListItem = ({ profile_path, name, character }) => (
    <li className={styles.castListItem} >
        <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name}/>
        <p className={styles.name} >{name}</p>
        <p className={styles.character} >Character: {character}</p>
    </li>
);

export default CastListItem;