import React, { useContext } from 'react'
import { ProductQuantity } from './quantity'
import { ProductOptions } from './options'
import { ProductAddButton } from './add-button'
import { Notice } from '../../../notice'
import { ProductBuyButtonProvider } from './_state/provider'
import { ProductContext } from '../_state/context'
import { ItemsContext } from '../../../items/_state/context'
import { usePortal } from '../../../../common/hooks'

function ProductBuyButton() {
   const [itemsState] = useContext(ItemsContext)
   const [productState] = useContext(ProductContext)

   return usePortal(
      <div className='wps-buy-button-wrapper' data-wps-component-order='0'>
         <ProductBuyButtonProvider productState={productState}>
            {productState.payload.availableForSale ? (
               <>
                  {!itemsState.componentOptions.hideQuantity ? <ProductQuantity /> : ''}
                  <ProductOptions />
                  <ProductAddButton />
               </>
            ) : (
               <Notice type='warning' message='Out of stock' />
            )}
         </ProductBuyButtonProvider>
      </div>,
      productState.element
   )
}

export { ProductBuyButton }
