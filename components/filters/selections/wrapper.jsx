import React from 'react'
import { FilterSelectionsClear } from './clear'
import { FilterSelectionsTypes } from './types'

function FilterSelectionsWrapper() {
   return (
      <div className='wps-filter-selections'>
         <FilterSelectionsTypes />
         <FilterSelectionsClear />
      </div>
   )
}

export { FilterSelectionsWrapper }
