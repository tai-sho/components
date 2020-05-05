import isEmpty from 'lodash/isEmpty'
import last from 'lodash/last'
import min from 'lodash/min'
import max from 'lodash/max'

import ProductPricingRange from '../range'
import ProductPriceSingle from '../single'
import { useAction } from '../../../../../common/hooks'
import { useAnime, fadeInBottom } from '../../../../../common/animations'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const { useEffect, useRef, useState } = wp.element

function lastPrice(prices, type) {
  if (isEmpty(prices)) {
    return 0
  }
  return last(prices[type])
}

function firstRegPrice(prices) {
  if (isEmpty(prices)) {
    return 0
  }

  return prices.regPrices[0]
}

function firstPriceCompareAt(prices) {
  if (isEmpty(prices)) {
    return 0
  }

  return prices.compareAtPrices[0]
}

function lastRegPrice(prices) {
  return lastPrice(prices, 'regPrices')
}

function lastPriceCompareAt(prices) {
  return lastPrice(prices, 'compareAtPrices')
}

function ProductPrice({ compareAt, prices, currencyCode, showPriceRange, selectedVariant }) {
  const singlePriceElement = useRef()
  const [regPrice, setRegPrice] = useState(() => getFirstPrice())
  const [comparePrice, setComparePrice] = useState(() => firstPriceCompareAt(prices))
  const isShowing = useAction('show.product.pricing', true)
  const animePulse = useAnime(fadeInBottom)

  function isRegAndCompareSame() {
    if (!showPriceRange && compareAt) {
      if (firstPriceCompareAt(prices) === firstRegPrice(prices)) {
        return true
      }
    }

    return false
  }

  function isFirstAndLastSame() {
    if (getFirstPrice() === getLastPrice()) {
      return true
    }

    return false
  }

  function getFirstPrice() {
    if (compareAt) {
      if (showPriceRange) {
        return min(prices.compareAtPrices)
      } else {
        return firstPriceCompareAt(prices)
      }
    } else {
      if (showPriceRange) {
        return min(prices.regPrices)
      } else {
        return firstRegPrice(prices)
      }
    }
  }

  function getLastPrice() {
    if (compareAt) {
      if (showPriceRange) {
        return max(prices.compareAtPrices)
      } else {
        return lastPriceCompareAt(prices)
      }
    } else {
      if (showPriceRange) {
        return max(prices.regPrices)
      } else {
        return lastRegPrice(prices)
      }
    }
  }

  useEffect(() => {
    if (selectedVariant) {
      if (selectedVariant.compareAtPriceV2) {
        setComparePrice(selectedVariant.compareAtPriceV2.amount)
      } else {
        setComparePrice(false)
      }

      setRegPrice(selectedVariant.priceV2.amount)
      console.log('singlePriceElement.current', singlePriceElement.current)

      if (!compareAt) {
        animePulse(singlePriceElement.current)
      }
    } else {
      setComparePrice(firstPriceCompareAt(prices))
      setRegPrice(getFirstPrice())
    }
  }, [selectedVariant])

  const priceWrapperCSS = css`
    line-height: 1;
    margin: 15px 0;
    display: block;
  `

  return (
    !isRegAndCompareSame() &&
    isShowing && (
      <span
        itemScope
        itemProp='offers'
        itemType='https://schema.org/Offer'
        className='wps-products-price wps-product-pricing wps-products-price-one'
        css={priceWrapperCSS}>
        {showPriceRange && !selectedVariant ? (
          <ProductPricingRange
            firstPrice={getFirstPrice()}
            lastPrice={getLastPrice()}
            isFirstAndLastSame={isFirstAndLastSame()}
            currencyCode={currencyCode}
            compareAt={compareAt}
            showPriceRange={showPriceRange}
            selectedVariant={selectedVariant}
          />
        ) : (
          <ProductPriceSingle
            currencyCode={currencyCode}
            ref={singlePriceElement}
            price={compareAt ? comparePrice : regPrice}
            compareAt={compareAt}
            showPriceRange={showPriceRange}
          />
        )}
      </span>
    )
  )
}

export default ProductPrice
