import isEmpty from 'lodash/isEmpty'

function hasCustomCheckoutAttributes(shopState) {
  if (!wpshopify.misc.isPro) {
    return false
  }

  if (!isEmpty(shopState.customAttributes) || !isEmpty(shopState.note)) {
    return true
  }

  return false
}

export { hasCustomCheckoutAttributes }
