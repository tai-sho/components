import update from 'immutability-helper'

function PaginationReducer(state, action) {
   switch (action.type) {
      case 'UPDATE_PAYLOAD': {
         return {
            ...state,
            payload: update(state.payload, { $push: action.payload })
         }
      }

      case 'SET_IS_LOADING': {
         return {
            ...state,
            isLoading: action.payload
         }
      }
      case 'SET_PAYLOAD': {
         return {
            ...state,
            payload: action.payload
         }
      }

      case 'SET_QUERY_PARAMS': {
         return {
            ...state,
            queryParams: update(state.queryParams, { $merge: action.payload })
         }
      }

      default: {
         return state
      }
   }
}

export { PaginationReducer }