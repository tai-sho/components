/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { formatPriceToCurrency } from '../../../../common/pricing/formatting'
import { mq } from '../../../../common/css'

function CartLineItemPrice({ currencyCode, lineItemTotal, lineItemTotalElement }) {
  const priceCSS = css`
    flex: 1;
    text-align: right;
  `

  const lineItemPriceCSS = css`
    line-height: 1;
    margin-top: 0;
    font-size: 15px;
    margin-left: 1em;
    align-self: flex-end;
    position: relative;
    top: 9px;
    text-align: right;

    ${mq('small')} {
      text-align: left;
      font-size: 17px;
      margin-left: 0;
      left: 0;
    }
  `

  return (
    <div className='wps-cart-lineitem-price-total-wrapper' css={priceCSS}>
      <div
        className='wps-cart-lineitem-price wps-cart-lineitem-price-total'
        ref={lineItemTotalElement}
        css={lineItemPriceCSS}>
        {formatPriceToCurrency(lineItemTotal, currencyCode)}
      </div>
    </div>
  )
}

export { CartLineItemPrice }