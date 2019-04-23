function ProductsInitialState(options) {
   return {
      componentOptions: options.componentOptions,
      payload: options.payload,
      isLoading: false,
      element: options.element
   }
}

export { ProductsInitialState }
