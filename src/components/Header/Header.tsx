import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './Header.module.css'
import { fetchBooks } from '../../redux/action-creators/books'
import { useState } from 'react'
import { setCategoryParam, setQueryParam, setSortParam } from '../../redux/action-creators/searchParams'


const Header: React.FC = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState<string>('')

    function handleCategories(e: React.ChangeEvent<HTMLSelectElement>){
        dispatch(setCategoryParam(e.target.value))
        //@ts-ignore
        dispatch(fetchBooks())
    }

    function handleSorting(e: React.ChangeEvent<HTMLSelectElement>){
        dispatch(setSortParam(e.target.value))
        //@ts-ignore
        dispatch(fetchBooks())
    }

    function handleQuery(){
        dispatch(setQueryParam(query))
        //@ts-ignore
        dispatch(fetchBooks())
    }

    function onEnterHandler(e: React.KeyboardEvent<HTMLInputElement>){
        if (e.key === 'Enter'){
            dispatch(setQueryParam(query))
            //@ts-ignore
            dispatch(fetchBooks())
        }
    }

  return (
    <div className={styles.container}>
        <h1>Search for books</h1>
        <div className={styles.searchBar}>
            <input type='text' placeholder='Enter your search query' onChange={e => setQuery(e.target.value)} onKeyDown={e => onEnterHandler(e)} />
            <svg onClick={() => handleQuery()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="black">
                <path strokeWidth='0.5' d="M14.9489 14.5509L11.7239 11.326C12.8154 10.1308 13.3957 8.55591 13.3407 6.93829C13.2857 5.32068 12.5998 3.78882 11.4297 2.67051C10.2597 1.5522 8.69835 0.936262 7.0799 0.954495C5.46145 0.972728 3.91441 1.62368 2.76982 2.76807C1.62523 3.91246 0.974004 5.45938 0.955484 7.07783C0.936965 8.69627 1.55263 10.2577 2.67073 11.428C3.78883 12.5982 5.32057 13.2844 6.93818 13.3397C8.55578 13.395 10.1308 12.8149 11.3261 11.7237L14.5512 14.9488C14.6039 15.0015 14.6755 15.0311 14.7501 15.0311C14.8247 15.0311 14.8962 15.0014 14.9489 14.9487C15.0017 14.8959 15.0313 14.8244 15.0313 14.7498C15.0313 14.6752 15.0016 14.6037 14.9489 14.5509ZM1.53175 7.15602C1.53175 6.0435 1.86165 4.95597 2.47974 4.03094C3.09782 3.10591 3.97632 2.38494 5.00416 1.9592C6.03199 1.53346 7.16299 1.42206 8.25413 1.6391C9.34528 1.85615 10.3476 2.39188 11.1342 3.17855C11.9209 3.96522 12.4566 4.9675 12.6737 6.05864C12.8907 7.14978 12.7793 8.28078 12.3536 9.30862C11.9278 10.3365 11.2069 11.215 10.2818 11.833C9.35681 12.4511 8.26927 12.781 7.15675 12.781C5.66542 12.7793 4.23566 12.1862 3.18113 11.1316C2.1266 10.0771 1.53343 8.64735 1.53175 7.15602Z"  fill="black"/>
            </svg>
        </div>
        <div className={styles.filters}>
            <div>
                <label>Categories</label>
                <select onChange={e => handleCategories(e)}>
                    <option value='all'>all</option>
                    <option value='art'>art</option>
                    <option value='biography'>biography</option>
                    <option value='computers'>computers</option>
                    <option value='history'>history</option>
                    <option value='medical'>medical</option>
                    <option value='poetry'>poetry</option>
                </select>
            </div>
            <div>
                <label>Sorting by</label>
                <select onChange={e => handleSorting(e)}>
                    <option value='relevance'>relevance </option>
                    <option value='newest'>newest</option>
                </select>
            </div>
        </div>
    </div>
  )
}
export default React.memo(Header)

