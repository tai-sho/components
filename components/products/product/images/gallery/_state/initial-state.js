function ProductGalleryInitialState(productState) {
   return {
      featImage: (productState.payload && productState.payload.images) ? productState.payload.images[0] : false,
      featImageElement: false,
      featImagePlaceholder: {
         src: '',
         alt: 'WP Shopify Placeholder Image'
      }
   }
}

export { ProductGalleryInitialState }
