import update from 'immutability-helper'

function FiltersReducer(state, action) {
   switch (action.type) {
      case 'SET_IS_BOOTSTRAPPING': {
         return {
            ...state,
            isBootstrapping: action.payload
         }
      }

      case 'SET_IS_LOADING': {
         return {
            ...state,
            isLoading: action.payload
         }
      }

      case 'CLEAR_SELECTIONS': {
         return {
            ...state,
            selections: update(state.selections, { $set: {} })
         }
      }

      case 'CLEAR_SELECTED_VENDORS': {
         return {
            ...state,
            selectedVendors: update(state.selectedVendors, { $set: [] })
         }
      }

      case 'CLEAR_SELECTED_TAGS': {
         return {
            ...state,
            selectedTags: update(state.selectedTags, { $set: [] })
         }
      }

      case 'CLEAR_SELECTED_TYPES': {
         return {
            ...state,
            selectedTypes: update(state.selectedTypes, { $set: [] })
         }
      }

      case 'SET_SELECTIONS': {
         if (!action.payload) {
            return state
         }

         return {
            ...state,
            selections: update(state.selections, { $merge: action.payload })
         }
      }

      case 'SET_FILTER_DATA': {
         return {
            ...state,
            filterData: action.payload
         }
      }

      case 'SET_SEARCH_DATA': {
         return {
            ...state,
            searchData: action.payload
         }
      }

      case 'SET_QUERY': {
         // return {
         //    ...state,
         //    query: action.payload
         // }
         return {
            ...state,
            filterParams: update(state.filterParams, { $merge: action.payload })
         }
      }

      case 'SET_FIRST': {
         // return {
         //    ...state,
         //    first: action.payload
         // }
         return {
            ...state,
            filterParams: update(state.filterParams, { $merge: action.payload })
         }
      }

      case 'SET_SORT_KEY': {
         // return {
         //    ...state,
         //    sortKey: action.payload
         // }
         return {
            ...state,
            filterParams: update(state.filterParams, { $merge: action.payload })
         }
      }

      case 'SET_REVERSE': {
         return {
            ...state,
            filterParams: update(state.filterParams, { $merge: action.payload })
         }
      }

      case 'SET_RESULTS': {
         return {
            ...state,
            results: action.payload
         }
      }

      case 'SET_HAS_RESULTS': {
         return {
            ...state,
            hasResults: action.payload
         }
      }

      case 'SET_HAS_NEXT_PAGE': {
         return {
            ...state,
            hasNextPage: action.payload
         }
      }

      case 'SET_HAS_PREV_PAGE': {
         return {
            ...state,
            hasPrevPage: action.payload
         }
      }

      case 'SET_SELECTED_TAGS': {
         return {
            ...state,
            selectedTags: action.payload
         }
      }

      case 'SET_SELECTED_TYPES': {
         return {
            ...state,
            selectedTypes: action.payload
         }
      }

      case 'SET_SELECTED_VENDORS': {
         return {
            ...state,
            selectedVendors: action.payload
         }
      }

      default: {
         return state
      }
   }
}

export { FiltersReducer }