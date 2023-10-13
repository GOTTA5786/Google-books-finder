import { BooksActionTypes, BooksActions, BooksState } from "../../types/books"


const initialState:BooksState = {
    totalItems: 0,
    items: new Map([]),
    isLoading: false,
    isPaginationLoading: false,
    error: null,
}

export function booksReducer (state: BooksState = initialState, action:BooksActions): BooksState{
    switch (action.type){
        case BooksActionTypes.FETCH_BOOKS:
            return {isLoading: true, isPaginationLoading: false, error: null, totalItems: 0, items: new Map([])}

        case BooksActionTypes.FETCH_BOOKS_FAILED:
            return {isLoading: false, isPaginationLoading: false, error: action.payload, totalItems: 0, items: new Map([])}

        case BooksActionTypes.FETCH_BOOKS_SUCCESS:
            if (action.payload.items){
                return {isLoading: false, isPaginationLoading: false, error: null, totalItems: action.payload.totalItems, items: action.payload.items}
            } 
            return {isLoading: false, isPaginationLoading: false, error: null, totalItems: 0, items: new Map([])}

        case BooksActionTypes.FETCH_BOOKS_PAGINATION:
            return {...state, isLoading: false, isPaginationLoading: true}
            
        case BooksActionTypes.FETCH_BOOKS_PAGINATION_SUCCESS:
            return {...state, isLoading: false, isPaginationLoading: false, error: null, items: new Map([...state.items, ...action.payload.items])}
        default:
            return state
    }
}