import CastListItem from '../CastListItem'

import styles from './CastList.module.css'

const CastList = ({ data }) => {
    const castListElems = data.map(item => <CastListItem key={item.credit_id} {...item} />)

    return (
        <ul  className={styles.castList} >
            {castListElems}
        </ul>
    )
};

export default CastList;