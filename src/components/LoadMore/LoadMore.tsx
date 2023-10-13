import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux/store/store'
import styles from './LoadMore.module.css'
import { loadMoreBooks } from '../../redux/action-creators/books'
import Spinner from '../Spinner/Spinner'
import { setStep } from '../../redux/action-creators/searchParams'


const LoadMore: React.FC = () => {
    const { isPaginationLoading } = useAppSelector(state => state.books)
    const dispatch = useDispatch()
    
    function handleClick() {
        dispatch(setStep())
        //@ts-ignore
        dispatch(loadMoreBooks())
        
    }

    return (
        <div className={styles.container}>
            { (isPaginationLoading)
            ? <div className={styles.spinnerContainer}><Spinner/></div>
            :<button  onClick={() => handleClick()}>Load more</button>}
        </div>
    )
}
export default LoadMore