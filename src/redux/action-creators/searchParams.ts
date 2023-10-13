import { SearchParamsActions, searchParamsActionsTypes } from "../../types/searchParams";

export function setQueryParam(query: string):SearchParamsActions{
    return {type:searchParamsActionsTypes.SET_QUERY, payload: query}
}

export function setCategoryParam(category: string):SearchParamsActions{
    return {type:searchParamsActionsTypes.SET_CATEGORY, payload: category}
}

export function setSortParam(sort: string):SearchParamsActions{
    return {type:searchParamsActionsTypes.SET_SORTING, payload: sort}
}

export function setStep():SearchParamsActions{
    return {type:searchParamsActionsTypes.SET_STEP}
}