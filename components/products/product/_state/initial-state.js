function ProductInitialState(payload) {
   return {
      payload: payload,
      element: false,
      selectedVariant: false,
      hasManyImages: (payload.images && payload.images.length > 1) ? true : false,
      hasManyVariants: (payload.variants && payload.variants.length > 1) ? true : false      
   }
}

export { ProductInitialState }
