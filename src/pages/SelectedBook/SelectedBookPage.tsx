import { Link, useParams } from 'react-router-dom'
import styles from './SelectedBookPage.module.css'
import { useAppSelector } from '../../redux/store/store'
import { Book } from '../../types/books'


const SelectedBookPage: React.FC = () => {
  const { id } = useParams()
  const { items } = useAppSelector(state => state.books)
  let book: Book | undefined

  if (id && items){
    book = items.get(id)
  }

  if (book){
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Link className={styles.link} to={'/'}>{`< to main page`}</Link>
          <span className={styles.text}>
            <img src={book.volumeInfo.imageLinks?.thumbnail.replace(/(zoom=[0-9])/,'zoom=1')}></img>
            <p className={styles.categories}>Categories: {book.volumeInfo.categories}</p>
            <p className={styles.title}>{book.volumeInfo.title}</p>
            <p className={styles.authors}>Authors: {book.volumeInfo.authors}</p>
            <p className={styles.description}>{book.volumeInfo.description}</p>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <Link className={styles.link} to={'/'}>{`< to main page`}</Link>
      We lost this book</div>
    </div>
  )
}
export default SelectedBookPage
