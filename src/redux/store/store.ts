import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "../reducers/booksReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { searchParamsReducer } from "../reducers/searchParamsReducer";


const rootReducer = combineReducers({
    books: booksReducer,
    searchParams: searchParamsReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector