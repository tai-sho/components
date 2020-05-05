import ProductPriceSingle from '../single'
import ProductPricingRangeGroup from './group'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

function ProductPricingRange({
  firstPrice,
  lastPrice,
  isFirstAndLastSame,
  currencyCode,
  compareAt,
  showPriceRange,
  selectedVariant,
}) {
  const showPriceRangeStyles = css`
    margin-top: ${showPriceRange && compareAt ? '-5px' : '0'};
    position: ${showPriceRange && compareAt ? 'relative' : 'static'};
    display: block;
  `

  return (
    <span className='wps-pricing-range-wrapper' css={showPriceRangeStyles}>
      {isFirstAndLastSame ? (
        <ProductPriceSingle
          showPriceRange={showPriceRange}
          price={firstPrice}
          currencyCode={currencyCode}
          compareAt={compareAt}
        />
      ) : (
        <ProductPricingRangeGroup
          selectedVariant={selectedVariant}
          firstPrice={firstPrice}
          lastPrice={lastPrice}
          currencyCode={currencyCode}
          compareAt={compareAt}
          showPriceRange={showPriceRange}
        />
      )}
    </span>
  )
}

export default wp.element.memo(ProductPricingRange)
