import React, { useContext } from 'react'
import { usePortal } from '../../../common/hooks'
import { ItemsContext } from '../../items/_state/context'
import { Products } from '../../products'

function FilterItems() {
   const [itemsState] = useContext(ItemsContext)

   function hasNewData() {
      return itemsState.payload.length > 0
   }

   function buildOptions() {
      return {
         payload: itemsState.payload,
         products: itemsState.payload.map(product => {
            return {
               product: product,
               componentID: false,
               element: false,
               gid: false,
               excludes: false,
               renderFromServer: false,
               selectedVariant: false,
               componentOptions: {
                  pagination: true
               }
            }
         }),
         dataType: 'products',
         originalQueryParams: itemsState.queryParams,
         type: 'filters',
         componentOptions: itemsState.componentOptions,
         noResultsText: itemsState.componentOptions.noResultsText
      }
   }

   return usePortal(<Products options={buildOptions()} />, document.querySelector(itemsState.componentOptions.dropzonePayload))
}

export { FilterItems }
