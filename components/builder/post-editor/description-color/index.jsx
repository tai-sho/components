import React, { useContext, useState } from 'react'
import { BaseControl, ColorPalette } from '@wordpress/components'
import { BuilderContext } from '../../_state/context'
import {defaultColors} from '../../_common'

function DescriptionColor() {
   const [builderState, builderDispatch] = useContext(BuilderContext)
   const [color, setColor] = useState(builderState.settings.descriptionColor)

   function onChange(newColor) {
      setColor(newColor)
      builderDispatch({ type: 'UPDATE_SETTING', payload: { key: 'descriptionColor', value: newColor } })
   }

   return (
      <BaseControl label='Description Color:'>
         <ColorPalette colors={defaultColors()} value={color} onChange={onChange} />
      </BaseControl>
   )
}

export { DescriptionColor }
