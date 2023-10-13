import { BooksResponce } from './../../types/books';
import { Dispatch } from "redux";
import { BooksActionTypes, BooksActions } from "../../types/books";
import { RootState } from "../store/store";

const API_KEY = import.meta.env.VITE_GOOGLE_BOOK_API_KEY

export function fetchBooks(){
    return async function(dispatch: Dispatch<BooksActions>, getState: () => RootState): Promise<void> {
        try {
            const { category, query, sortBy } = getState().searchParams
            let link: string

            if (query.length === 0){
                return
            }

            dispatch({type:BooksActionTypes.FETCH_BOOKS})

            if (category === 'all'){
                link = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sortBy}&key=${API_KEY}&startIndex=0&maxResults=30`
            } else{
                link = `https://www.googleapis.com/books/v1/volumes?q=${query}subject:${category}&orderBy=${sortBy}&key=${API_KEY}&startIndex=0&maxResults=30`
            }
            
            fetch(link)
            .then(response => response.json())
            .then((data: BooksResponce) => {
                
                if (data.items){
                    const mappedData = new Map (data.items.map(item  => [item.id, item]))
                    dispatch({type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: {totalItems: data.totalItems, items: mappedData}})
                }
                else {
                    dispatch({type: BooksActionTypes.FETCH_BOOKS_FAILED, payload: 'No results found'})
                }
            })
            
        } catch (e) {
            dispatch({type: BooksActionTypes.FETCH_BOOKS_FAILED, payload: 'Something went wrong'})
        }
    }
}

export function loadMoreBooks(){
    return async function(dispatch: Dispatch<BooksActions>, getState: () => RootState): Promise<void>{
        try {
            dispatch({type:BooksActionTypes.FETCH_BOOKS_PAGINATION})
            const { category, query, sortBy, paginationStep } = getState().searchParams

            let link: string

            if (category === 'all'){
                link = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sortBy}&startIndex=${paginationStep * 30}&maxResults=30&key=${API_KEY}`
            } else{
                link = `https://www.googleapis.com/books/v1/volumes?q=${query}subject:${category}&orderBy=${sortBy}&startIndex=${paginationStep * 30}&maxResults=30&key=${API_KEY}`
            }

            fetch(link)
            .then(response => response.json())
            .then((data: BooksResponce) => {
                if (data.items){
                    const mappedData = new Map (data.items.map(item  => [item.id, item]))
                    dispatch({type: BooksActionTypes.FETCH_BOOKS_PAGINATION_SUCCESS, payload:{items: mappedData}})
                } else{
                    dispatch({type: BooksActionTypes.FETCH_BOOKS_FAILED, payload: 'No results found'})
                }
            })
        } catch (e) {
            dispatch({type: BooksActionTypes.FETCH_BOOKS_FAILED, payload: 'Something went wrong'})
        }
    }
}

