const ReviewListItem = ({author, content}) => (
    <li>
        <h3>author: {author}</h3>
        <p>{content}</p>
    </li>
);

export default ReviewListItem;