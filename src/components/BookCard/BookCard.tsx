import { Link } from 'react-router-dom'
import { Book } from '../../types/books'
import styles from './BookCard.module.css'

const BookCard: React.FC<Book> = (props) => {
    
  return (
    <Link className={styles.container} to={`/book/${props.id}`}>
        <img src={props.volumeInfo.imageLinks?.thumbnail.replace(/(zoom=[0-9])/,'zoom=1')}/>
        <div>
          <span className={styles.categories}>{props.volumeInfo.categories ? props.volumeInfo.categories[0] : ''}</span>
          <p>{props.volumeInfo.title}</p>
          <span className={styles.authors}>{props.volumeInfo.authors ? props.volumeInfo.authors.join(', ') : '' }</span>
        </div>
    </Link>
  )
}

export default BookCard