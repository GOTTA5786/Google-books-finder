import { SearchParamsActions, SearchParamsState, searchParamsActionsTypes } from "../../types/searchParams"



const initialState: SearchParamsState = {
    query: '',
    category: 'all',
    sortBy: 'relevance',
    paginationStep: 0
}

export function searchParamsReducer(state: SearchParamsState = initialState, action: SearchParamsActions): SearchParamsState{
    switch (action.type){
        case searchParamsActionsTypes.SET_CATEGORY:
            return {...state, category: action.payload}

        case searchParamsActionsTypes.SET_QUERY:
            return {...state, query: action.payload}

        case searchParamsActionsTypes.SET_SORTING:
            return {...state, sortBy: action.payload}

        case searchParamsActionsTypes.SET_STEP:
            return {...state, paginationStep: state.paginationStep + 1}

        default:
            return state
    }
}