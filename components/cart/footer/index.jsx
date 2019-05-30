import React, { useContext, useEffect, useRef } from 'react'
import { ShopContext } from '../../shop/_state/context'
import { maybeformatPriceToCurrency } from '../../../common/pricing/formatting'
import { pulse, useAnime } from '../../../common/animations'
import { CartCheckout } from '../checkout'
import { CartNote } from '../note'
import { CartTerms } from '../terms'

function CartFooter() {
   const [shopState] = useContext(ShopContext)
   const totalElement = useRef()

   const animate = useAnime(pulse)

   useEffect(() => {
      if (!shopState.isShopReady) {
         return
      }

      animate(totalElement.current)
   }, [shopState.checkoutCache.total])

   return (
      <section className='wps-cart-footer'>
         {shopState.settings.cart.enableCartNotes && <CartNote />}
         {shopState.settings.cart.enableCartTerms && <CartTerms />}

         <div className='baseline row align-items-end justify-content-between m-0'>
            <p className='wps-total-prefix p-0'>Subtotal:</p>
            <p className='wps-total-amount col p-0' ref={totalElement} data-wps-is-ready={shopState.isShopReady}>
               {maybeformatPriceToCurrency(shopState.checkoutCache.total)}
            </p>
         </div>
         <CartCheckout />
      </section>
   )
}

export { CartFooter }
