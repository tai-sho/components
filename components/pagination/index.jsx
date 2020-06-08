import PaginationControlsWrapper from './controls-wrapper'
import PaginationItems from './items'
import { PaginationProvider } from './_state/provider'
import { ItemsContext } from '../items/_state/context'

function Pagination({ children }) {
  console.log('::::: Pagination 1 :::::')
  const { useContext } = wp.element
  const [itemsState, itemsDispatch] = useContext(ItemsContext)

  return (
    <PaginationProvider
      payloadSettings={itemsState.payloadSettings}
      hasMoreItems={itemsState.hasMoreItems}>
      <PaginationItems
        payload={itemsState.payload}
        payloadSettings={itemsState.payloadSettings}
        isLoading={itemsState.isLoading}
        hasMoreItems={itemsState.hasMoreItems}
        noResultsText={itemsState.noResultsText}>
        {children}
      </PaginationItems>
      <PaginationControlsWrapper itemsState={itemsState} itemsDispatch={itemsDispatch} />
    </PaginationProvider>
  )
}

export default Pagination
