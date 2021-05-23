import { menuItems } from '../../../../../../../Navbar/Components/Navbar/menuItems';
import ReviewListItem from '../ReviewListItem'

import styles from './ReviewList.module.css'

const ReviewList = ({ data }) => {
    const reviews = data.map(item => 
        <ReviewListItem key={menuItems.id} {...item} />
    )
    return (
        <ul className={styles.list} >
            {reviews}
        </ul>
    )
};

export default ReviewList;