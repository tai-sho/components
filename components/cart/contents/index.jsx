import React, { useContext, useEffect, useRef } from 'react';
import { ShopContext } from '../../shop/context';
import { CartLineItems } from '../lineitems';
import { CartNotice } from '../notice';
import { CartNoticeEmpty } from '../notice/empty';

function CartContents() {

   const { shopState } = useContext(ShopContext);

   return (
      <section className="wps-cart-contents">
         {
            !shopState.checkoutCache.isCartEmpty
               ? <CartLineItems lineItems={shopState.checkoutCache.variants} />
               : (<CartNotice>
                  <CartNoticeEmpty />
               </CartNotice>)
         }
      </section>
   )

}

export {
   CartContents
}