import React, { useReducer, useContext } from 'react';
import { CartInitialState } from './initial-state';
import { ShopContext } from '../shop/context';
import { CartContext } from './context';
import { CartReducer } from './reducer';
import { CartButton } from './button';
import { CartBody } from './body';

function Cart(props) {

   const { shopState } = useContext(ShopContext);
   const [state, dispatch] = useReducer(CartReducer, CartInitialState(shopState.checkout, props));

   return (
      <>
         <CartContext.Provider value={{
            cartState: state,
            cartDispatch: dispatch
         }}>

            <CartButton />
            <CartBody />

         </CartContext.Provider>

      </>
   )

}

export {
   Cart
}
