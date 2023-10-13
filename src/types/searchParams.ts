export enum searchParamsActionsTypes {
    SET_QUERY = 'SET_QUERY',
    SET_CATEGORY = 'SET_CATEGORY',
    SET_SORTING = 'SET_SORTING',
    SET_STEP = 'SET_STEP'
}

interface setStepAction{
    type:searchParamsActionsTypes.SET_STEP
}

interface SetQuetyAction{
    type:searchParamsActionsTypes.SET_QUERY
    payload: string
}

interface SetCategotyAction{
    type:searchParamsActionsTypes.SET_CATEGORY
    payload: string
}

interface SetSortingAction{
    type:searchParamsActionsTypes.SET_SORTING
    payload: string
}

export type SearchParamsActions = SetCategotyAction | SetQuetyAction | SetSortingAction | setStepAction

export interface SearchParamsState{
    query: string
    category: string
    sortBy: string
    paginationStep: number
}