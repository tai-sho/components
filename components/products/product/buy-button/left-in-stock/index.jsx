import { ProductBuyButtonTextNotice } from '../notice'
import { getVariantInventoryManagement } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-api'
import { useIsMounted } from '/Users/andrew/www/devil/devilbox-new/data/www/wpshopify-hooks'
import to from 'await-to-js'
import find from 'lodash/find'

function ProductBuyButtonLeftInStock({ payload, selectedVariant, isTouched }) {
  const { useEffect, useState } = wp.element
  const [quantityLeft, setQuantityLeft] = useState(false)
  const [status, setStatus] = useState('idle')
  const [variantInventory, setVariantInventory] = useState(false)
  const isMounted = useIsMounted()

  useEffect(() => {
    console.log('isTouched', isTouched)
    console.log('status', status)

    if (isTouched && status === 'idle') {
      fetchVariantInventoryManagement()
    }
  }, [isTouched])

  function getVariantIds(payload) {
    if (!payload.variants) {
      return []
    }

    return payload.variants.map((v) => v.id)
  }

  function sanitizeInventoryResponse(response) {
    return response.data.map((variant) => {
      return {
        id: btoa(variant.id),
        tracked: variant.inventoryItem.tracked,
        inventoryLevels: variant.inventoryItem.inventoryLevels.edges,
        inventoryPolicy: variant.inventoryPolicy,
      }
    })
  }

  async function fetchVariantInventoryManagement() {
    console.log('fetchVariantInventoryManagement')

    const variantIDs = getVariantIds(payload)
    console.log('fetchVariantInventoryManagement', variantIDs)
    if (!variantIDs.length) {
      console.warn('WP Shopify warning: No variant ids found for fetchVariantInventoryManagement')
      return
    }

    setStatus('pending')
    console.log('variantIDs', variantIDs)

    const [error, resp] = await to(getVariantInventoryManagement({ ids: variantIDs }))
    console.log('getVariantInventoryManagement -- resp', resp)
    console.log('getVariantInventoryManagement -- error', error)

    if (isMounted.current) {
      if (error || resp.data.type === 'error') {
        setStatus('error')

        if (error) {
          console.error('WP Shopify error: ', error)
        }

        console.error('WP Shopify error: ', resp.data.message)

        return
      }

      setStatus('resolved')

      var variantInventoryResp = sanitizeInventoryResponse(resp)

      setVariantInventory(variantInventoryResp)
    }
  }

  function findAvailableQuantityByLocations(variant) {
    if (variant.inventoryLevels.length === 1) {
      return variant.inventoryLevels[0].node.available
    }

    const varianttwo = variant.inventoryLevels.reduce((accumulator, currentValue) => {
      return accumulator.node.available + currentValue.node.available
    })

    return varianttwo
  }

  function findSelectedVariant(selectedVariantId) {
    return find(variantInventory, { id: selectedVariantId })
  }

  function findInventoryFromVariantId(selectedVariant) {
    if (!variantInventory) {
      return false
    }

    let totalAvailableQuantity = findAvailableQuantityByLocations(selectedVariant)

    if (totalAvailableQuantity > 0 && totalAvailableQuantity < 10) {
      return totalAvailableQuantity
    } else {
      return false
    }
  }

  useEffect(() => {
    if (!isMounted.current || !selectedVariant) {
      return
    }

    if (selectedVariant.availableForSale) {
      console.log('selectedVariant.id', selectedVariant.id)

      let selectedVariantFound = findSelectedVariant(selectedVariant.id)
      console.log('selectedVariantFound', selectedVariantFound)

      if (!selectedVariantFound) {
        console.warn(
          'WP Shopify warning: could not find selected variant within <ProductBuyButton>'
        )
        return
      }

      if (!selectedVariantFound.tracked) {
        return
      }

      if (selectedVariantFound.inventoryPolicy === 'CONTINUE') {
        return
      }
      console.log('selectedVariantFound :: ', selectedVariantFound)

      var totalAvailableQuantity = findInventoryFromVariantId(selectedVariantFound)

      if (!totalAvailableQuantity) {
        return
      }

      setQuantityLeft(totalAvailableQuantity)
    }
  }, [selectedVariant])

  return quantityLeft && <ProductBuyButtonTextNotice quantityLeft={quantityLeft} />
}

export default ProductBuyButtonLeftInStock
