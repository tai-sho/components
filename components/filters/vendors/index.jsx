import React, { useContext } from 'react'
import { Filter } from '../filter'
import isEmpty from 'lodash/isEmpty'
import { FiltersContext } from '../_state/context'
import { FilterVendor } from '../vendor'

function FilterVendors() {
   const { filtersState } = useContext(FiltersContext)

   return (
      <Filter heading='Vendors'>
         <div className='wps-filter-content'>
            {filtersState.isBootstrapping ? (
               <p data-wps-is-ready='0'>Loading Vendors ...</p>
            ) : isEmpty(filtersState.filterData) ? (
               <p>No vendors found</p>
            ) : (
               <ul className='wps-filters-list wps-vendors'>
                  {filtersState.filterData.vendors.map(vendor => (
                     <FilterVendor vendor={vendor} key={vendor} />
                  ))}
               </ul>
            )}
         </div>
      </Filter>
   )
}

export { FilterVendors }
