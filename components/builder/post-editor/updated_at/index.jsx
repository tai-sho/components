import React, { useContext, useState } from 'react'
import { TextControl } from '@wordpress/components'
import { BuilderContext } from '../../_state/context'

function UpdatedAt() {
   const [builderState, builderDispatch] = useContext(BuilderContext)
   const [val, setVal] = useState(builderState.settings.updated_at)

   function onChange(newVal) {
      setVal(newVal)
      builderDispatch({ type: 'UPDATE_SETTING', payload: { key: 'updated_at', value: newVal } })
   }

   return <TextControl label='Updated At' value={val} help='Match product updated at' onChange={onChange} />
}

export { UpdatedAt }
