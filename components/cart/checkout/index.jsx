import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../shop/_state/context'
import { CartContext } from '../_state/context'

import { Loader } from '../../loader'

import { replaceLineItems, updateCheckoutAttributes } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
import isEmpty from 'lodash/isEmpty'
import to from 'await-to-js'

function CartCheckout() {
   const [shopState] = useContext(ShopContext)
   const [cartState, cartDispatch] = useContext(CartContext)

   function hasManagedDomain(url) {
      return url.includes('myshopify.com')
   }

   function extractCheckoutURL(webUrl) {
      return webUrl.split('myshopify.com')[1]
   }

   function checkoutUrlWithCustomDomain(webUrl) {
      return shopState.info.primaryDomain.url + extractCheckoutURL(webUrl)
   }

   function managedDomainRedirect(checkout) {
      window.open(checkout.webUrl, WP_Shopify.settings.checkoutButtonTarget)
   }

   function customDomainRedirect(checkout) {
      window.open(checkoutUrlWithCustomDomain(checkout.webUrl), WP_Shopify.settings.checkoutButtonTarget)
   }

   function checkoutRedirect(checkout) {
      if (!WP_Shopify.settings.enableCustomCheckoutDomain || !hasManagedDomain(checkout.webUrl)) {
         return managedDomainRedirect(checkout)
      }

      customDomainRedirect(checkout)

      if (WP_Shopify.settings.checkoutButtonTarget === '_blank') {
         cartDispatch({ type: 'SET_IS_CHECKING_OUT', payload: false })
      }
   }

   async function onCheckout() {
      cartDispatch({ type: 'UPDATE_NOTICES', payload: [] })
      cartDispatch({ type: 'SET_IS_CHECKING_OUT', payload: true })

      wp.hooks.doAction('on.checkout', shopState.checkoutCache)

      const [err, success] = await to(replaceLineItems(shopState.checkoutCache.lineItems))

      if (err) {
         cartDispatch({ type: 'SET_IS_CHECKING_OUT', payload: false })
         return cartDispatch({ type: 'UPDATE_NOTICES', payload: { type: 'error', message: err } })
      }

      if (isEmpty(success.lineItems)) {
         cartDispatch({ type: 'SET_IS_CHECKING_OUT', payload: false })
         return cartDispatch({ type: 'UPDATE_NOTICES', payload: { type: 'error', message: 'No line items exist ' } })
      }

      if (!isEmpty(shopState.customAttributes)) {
         const [errAttr, resp] = await to(
            updateCheckoutAttributes({
               customAttributes: shopState.customAttributes,
               note: shopState.note
            })
         )

         console.log('errAttr', errAttr)
         console.log('resp', resp)

         if (errAttr) {
            cartDispatch({ type: 'SET_IS_CHECKING_OUT', payload: false })
            return cartDispatch({ type: 'UPDATE_NOTICES', payload: { type: 'error', message: errAttr } })
         }

         return checkoutRedirect(resp)
      }

      checkoutRedirect(success)
   }

   function buttonStyle() {
      return {
         backgroundColor: shopState.settings.cart.checkoutButtonColor
      }
   }

   return (
      <>
         <button
            className='wps-btn wps-btn-checkout'
            onClick={onCheckout}
            data-wps-is-ready={shopState.isShopReady}
            disabled={cartState.isCheckingOut || !cartState.termsAccepted || shopState.isCartEmpty}
            style={buttonStyle()}>
            {cartState.isCheckingOut ? <Loader isLoading={cartState.isCheckingOut} /> : cartState.checkoutText}
         </button>
      </>
   )
}

export { CartCheckout }
