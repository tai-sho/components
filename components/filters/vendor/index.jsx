import React, { useEffect, useState, useContext, useRef } from 'react'
import { FiltersContext } from '../_state/context'
import { updateSelectionList, isCurrentlySelected } from '../../../common/selections'

function FilterVendor({ vendor }) {
   const { filtersState, filtersDispatch } = useContext(FiltersContext)
   const [isSelected, setIsSelected] = useState(false)
   const isFirstRender = useRef(true)

   function buildNewSelection() {
      return updateSelectionList({
         isSelected: !isSelected,
         currentList: filtersState.selections.vendor,
         selectedValue: vendor
      })
   }

   useEffect(() => {
      if (isFirstRender.current) {
         isFirstRender.current = false
         return
      }

      setIsSelected(isCurrentlySelected(filtersState.selections, vendor, 'vendor'))
   }, [filtersState.selectedVendors])

   const onClick = () => {
      setIsSelected(!isSelected)

      const newList = buildNewSelection()

      console.log('Setting selections from <FilterVendor>')

      filtersDispatch({ type: 'SET_SELECTIONS', payload: { vendor: newList } })
      filtersDispatch({ type: 'SET_SELECTED_VENDORS', payload: newList })
   }

   return (
      <div className='wps-input-wrapper' data-wps-is-selected={isSelected}>
         <input id={'input-' + vendor} type='checkbox' checked={isSelected ? 'checked' : ''} className='wps-input-value' onChange={onClick} />

         <label htmlFor={'input-' + vendor} className='wps-input-label'>
            {vendor}
         </label>
      </div>
   )
}

export { FilterVendor }
