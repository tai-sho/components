import filter from 'lodash/filter';
import merge from 'lodash/merge';
import head from 'lodash/head';
import { createObj } from '../utils';

function getAvailableVariants(product) {

   let combinations = product.variants.map(variant => {
      return variant.selectedOptions.map(selectableOption => createObj(selectableOption.name, selectableOption.value));
   });

   return combinations.map(combination => {
      return merge(...combination);
   });

}

function filterAvailableVariantsBySelectedOption(product, selectedOption) {
   return filter(getAvailableVariants(product), selectedOption);
}


function addProductDetailsToVariant(variant, product) {

   var variantCopy = variant;

   variantCopy.productTitle = product.title;
   variantCopy.productId = product.id;

   return variantCopy;

}

function calcLineItemTotal(price, quantity) {
   return Number(price) * Number(quantity);
}

function getVariantFromLineItem(checkoutVariants, lineItem) {
   return head(filter(checkoutVariants, vari => vari.id === lineItem.variantId))
}

function calcCheckoutTotal(checkoutState) {

   var checkoutStateCopy = checkoutState;

   return checkoutState.lineItems.reduce((accumulator, lineItem) => {
      return calcCheckoutTotalReducer(accumulator, lineItem, checkoutStateCopy);
   }, 0);

}


function calcCheckoutTotalReducer(accumulator, lineItem, checkoutState) {
   console.log('checkoutState', checkoutState);

   var variant = getVariantFromLineItem(checkoutState.variants, lineItem);

   accumulator += calcLineItemTotal(lineItem.quantity, variant.price);

   return accumulator;

}

export {
   getAvailableVariants,
   filterAvailableVariantsBySelectedOption,
   addProductDetailsToVariant,
   calcLineItemTotal,
   calcCheckoutTotal
}