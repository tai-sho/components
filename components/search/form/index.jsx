import React, { useContext, useEffect } from 'react'
import { queryByTitleParam } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
import { SearchContext } from '../_state/context'
import { ItemsContext } from '../../items/_state/context'
import { usePortal } from '../../../common/hooks'
import { SearchInput } from './input'
import { SearchButton } from './button'
import { SearchNotices } from './notices'
import { SearchLoader } from './loader'

function SearchForm() {
   const [itemsState, itemsDispatch] = useContext(ItemsContext)
   const [searchState, searchDispatch] = useContext(SearchContext)

   useEffect(() => {
      if (searchState.isFirstRender) {
         return
      }

      itemsDispatch({
         type: 'SET_QUERY_PARAMS',
         payload: {
            query: queryByTitleParam(searchState.searchTerm)
         }
      })
   }, [searchState.searchTerm])

   return usePortal(
      <form role='search' className='wps-search-form'>
         <SearchNotices />

         <div className='wps-search-wrapper'>
            <SearchLoader />
            <SearchInput />
            <SearchButton />
         </div>
      </form>,
      document.querySelector(searchState.componentOptions.dropzoneForm)
   )
}

export { SearchForm }
