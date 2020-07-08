import { mq } from '../../../../common/css'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

function CartLineItemQuantityDecIcon() {
  const cartLineItemQuantityDecIconCSS = css`
    position: relative;
    content: '';
    display: block;
    height: 1px;
    background: black;
    width: 12px;
    position: absolute;
    top: calc(50% - 1px);
    left: calc(50% - 6px);
    ${mq('small')} {
      width: 20px;
      left: calc(50% - 10px);
    }
  `

  return (
    <span
      css={cartLineItemQuantityDecIconCSS}
      className='wps-quantity-icon wps-quantity-decrement-icon'
    />
  )
}

export default CartLineItemQuantityDecIcon
