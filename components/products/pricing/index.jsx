import React, { useContext } from 'react';
import { getPrices } from '../../../common/pricing/data';
import { formatPriceToCurrency } from '../../../common/pricing/formatting';
import { LoadingContext } from '../../../common/context';

function ProductPricing({ product }) {

   const { isFiltering } = useContext(LoadingContext);
   const newPrices = getPrices(product);

   return (

      <div
         className="wps-component wps-component-products-pricing"
         data-wps-is-component-wrapper
         data-wps-product-id={product.id}
         data-wps-post-id=""
         data-wps-ignore-sync="1"
         data-wps-is-showing-compare-at=""
         data-wps-is-showing-local=""
         data-wps-is-showing-price-range="">

         <h3
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
            className="wps-products-price wps-product-pricing wps-products-price-one">

            <div className="wps-price-wrapper"
               data-wps-is-ready={isFiltering ? '0' : '1'}
               data-wps-is-multi-price="0"
               data-wps-is-price-wrapper="1">

               {formatPriceToCurrency(newPrices[0])}

            </div>

         </h3>

      </div>

   )

}

export default ProductPricing;