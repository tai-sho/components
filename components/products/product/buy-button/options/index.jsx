import React, { useContext, useState, useEffect, useRef } from 'react'
import { ProductOption } from '../option'
import { ProductBuyButtonContext } from '../_state/context'
import { ProductContext } from '../../_state/context'
import size from 'lodash/size'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import uniqBy from 'lodash/uniqBy'
import { onlyAvailableItems } from '../../../../../common/products'

function allOptionsSelectedMatch(onlySelectedOptions, product) {
   return size(onlySelectedOptions) === product.options.length
}

function onlyAvailableVariantsOptions(variants) {
   return groupBy(variants.flatMap(variant => variant.selectedOptions), 'name')
}

function onlyUniqueOptionValues(optionValues) {
   return uniqBy(optionValues, 'value').filter(item => item.value)
}

function formatAvailableOptions(availOptions) {
   return map(availOptions, (optionValues, optionName) => {
      return {
         name: optionName,
         values: onlyUniqueOptionValues(optionValues)
      }
   })
}

function onlyAvailableOptionsFromVariants(variants) {
   return formatAvailableOptions(onlyAvailableVariantsOptions(onlyAvailableItems(variants)))
}

/*

If this component is rendered, that means at least one variant is available for purchase

*/
function ProductOptions() {
   const isFirstRender = useRef(true)
   const [productState, productDispatch] = useContext(ProductContext)
   const [buyButtonState, buyButtonDispatch] = useContext(ProductBuyButtonContext)

   const options = onlyAvailableOptionsFromVariants(buyButtonState.product.variants)

   useEffect(() => {
      if (isFirstRender.current) {
         isFirstRender.current = false
         return
      }

      if (allOptionsSelectedMatch(buyButtonState.selectedOptions, buyButtonState.product)) {
         buyButtonDispatch({ type: 'SET_ALL_SELECTED_OPTIONS', payload: true })

         productDispatch({
            type: 'SET_SELECTED_VARIANT',
            payload: {
               product: buyButtonState.product,
               selectedOptions: buyButtonState.selectedOptions
            }
         })
      } else {
         buyButtonDispatch({ type: 'SET_ALL_SELECTED_OPTIONS', payload: false })
      }
   }, [buyButtonState.selectedOptions])

   return (
      <div className='wps-component wps-component-products-options wps-container-fluid' data-wps-is-component-wrapper>
         {options.map(option => (
            <ProductOption key={option.name} option={option} />
         ))}
      </div>
   )
}

export { ProductOptions }
