import React, { useContext, useRef, useEffect } from 'react'
import { useOnClickOutside } from '../../../common/hooks'
import { CartHeader } from '../header'
import { CartContents } from '../contents'
import { CartFooter } from '../footer'
import { ShopContext } from '../../shop/_state/context'

import { useAnime, slideInRight, slideOutRight, stagger } from '../../../common/animations'

function CartBody() {
   const cart = useRef()

   const animeSlideInRight = useAnime(slideInRight)
   const animeSlideOutRight = useAnime(slideOutRight)
   const animeStagger = useAnime(stagger)
   const [shopState, shopDispatch] = useContext(ShopContext)

   useOnClickOutside(
      cart,
      e => {
         document.querySelector('.wps-cart').classList.remove('wps-cart-is-showing')
         shopDispatch({ type: 'CLOSE_CART' })
      },
      shopState.cartOpen
   )

   useEffect(() => {
      if (!shopState.isShopReady) {
         return
      }

      if (shopState.cartOpen) {
         // animeSlideInRight(document.querySelector('.wps-cart'))
         document.querySelector('.wps-cart').classList.add('wps-cart-is-showing')
         animeStagger(document.querySelectorAll('.wps-cart-lineitem'))
         if (wp.hooks) {
            wp.hooks.doAction('on.cart.open')
         }
      } else {
         document.querySelector('.wps-cart').classList.remove('wps-cart-is-showing')

         if (wp.hooks) {
            wp.hooks.doAction('on.cart.close')
         }
      }
   }, [shopState.cartOpen])

   return (
      <section ref={cart} className='wps-cart'>
         <CartHeader />
         <CartContents isCartEmpty={shopState.isCartEmpty} checkoutCache={shopState.checkoutCache} />
         <CartFooter />
      </section>
   )
}

export { CartBody }
