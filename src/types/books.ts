export interface Book{
    id: string,
    volumeInfo: {
      title: string,
      authors: string[],
      description: string,
      mainCategory: string,
      categories: string[],
      imageLinks?: {
        smallThumbnail: string,
        thumbnail: string,
      },
    }
}

export interface BooksResponce{
    totalItems: number,
    items: Book[]
}

export enum BooksActionTypes{
    FETCH_BOOKS = 'FETCH_BOOKS',
    FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_PAGINATION = 'FETCH_BOOKS_PAGINATION',
    FETCH_BOOKS_PAGINATION_SUCCESS = 'FETCH_BOOKS_PAGINATION_SUCCESS'
}

type MappedBooks = Map<string, Book>

interface FetchBooksPaginationSuccessAction{
    type: BooksActionTypes.FETCH_BOOKS_PAGINATION_SUCCESS,
    payload: {
        items: MappedBooks
    }
}

interface FetchBooksPaginationAction{
    type: BooksActionTypes.FETCH_BOOKS_PAGINATION,
}

interface FetchBooksSuccessAction{
    type: BooksActionTypes.FETCH_BOOKS_SUCCESS,
    payload: {
        totalItems: number,
        items: MappedBooks
    }
}

interface FetchBooksAction{
    type: BooksActionTypes.FETCH_BOOKS,
}

interface FetchBooksFailedAction{
    type: BooksActionTypes.FETCH_BOOKS_FAILED,
    payload: string
}

export type BooksActions = 
FetchBooksAction 
| FetchBooksFailedAction 
| FetchBooksSuccessAction 
| FetchBooksPaginationAction 
| FetchBooksPaginationSuccessAction

export interface BooksState{
    totalItems: number,
    items: MappedBooks,
    isLoading: boolean,
    isPaginationLoading: boolean,
    error: null | string
}