import Header from '../../components/Header/Header'
import { useAppSelector } from '../../redux/store/store'
import styles from './MainPage.module.css'
import BookCard from '../../components/BookCard/BookCard'
import LoadMore from '../../components/LoadMore/LoadMore'
import Spinner from '../../components/Spinner/Spinner'


const MainPage: React.FC = () => {  
  const { items, totalItems, isLoading, error } = useAppSelector(store => store.books)
  
  if (isLoading){
    return(
      <>
        <Header/>
          <div className={styles.container}>
          <div className={styles.loading}>Loading<div className={styles.spinnerContainer}><Spinner/></div></div>
        </div>
      </>
    )
  }

  if (error){
    return (
      <>
        <Header/>
        <div className={styles.container}>
          <p>{error}</p>
        </div>
      </>
    )
  }

  if (typeof(items) === 'string'){
    return (<div>{items}</div>)
  }

  return (
    <>
      <Header/>
      <div className={styles.container}>
        
        {totalItems !== 0 ? <p> Found {totalItems} results</p> : <></>}
        <div className={styles.cardColumns}>
          {[...items.values()].map(item => <BookCard key={item.id} {...item}/>)}
        </div>
          { items.size < totalItems ? <LoadMore/> : <></>}
      </div>
    </>
  )
}
export default MainPage
