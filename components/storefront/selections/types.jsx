/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { StorefrontSelectionsValues } from './values'
import { StorefrontContext } from '../_state/context'
import { getSelectionTypes } from '../../../common/selections'
import { FilterHook } from '../../../common/utils'
import isEmpty from 'lodash/isEmpty'

const { useContext } = wp.element

function StorefrontSelectionsType({ selectionType }) {
  const [storefrontState] = useContext(StorefrontContext)

  const selectionTypeHeadingCSS = css`
    min-width: 75px;
    text-align: right;
    padding-right: 10px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
  `

  return (
    !isEmpty(storefrontState.selections[selectionType]) && (
      <div className='wps-filter-selection-type row mb-2'>
        <div className='wps-selections-group align-items-center'>
          {selectionType !== 'available_for_sale' && (
            <span className='wps-filter-selection-type-heading' css={selectionTypeHeadingCSS}>
              <FilterHook name='storefront.selections.type.text'>{selectionType}</FilterHook>
            </span>
          )}

          <StorefrontSelectionsValues
            selectionType={selectionType}
            vals={storefrontState.selections[selectionType]}
          />
        </div>
      </div>
    )
  )
}

function StorefrontSelectionsTypes() {
  const [storefrontState] = useContext(StorefrontContext)

  const selectionTypes = getSelectionTypes(storefrontState.selections)

  return selectionTypes.map((selectionType, index) => (
    <StorefrontSelectionsType key={index} selectionType={selectionType} />
  ))
}

export { StorefrontSelectionsTypes }
