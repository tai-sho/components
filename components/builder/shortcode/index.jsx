import React, { useContext, useRef } from 'react'
import copy from 'copy-to-clipboard'
import { BuilderContext } from '../_state/context'
import { Button } from '@wordpress/components'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

function Shortcode() {
   const [builderState, builderDispatch] = useContext(BuilderContext)

   const inputRef = useRef()

   var shortcodeCSS = css`
      width: 100%;
      position: fixed;
      bottom: 0;
      display: flex;
      z-index: 2;
      background: bisque;
   `

   var inputCSS = css`
      padding: 1em 1.4em;
      font-size: 2em;
      flex: 1;
      border-top: 1px solid #e2e4e7;
      font-family: monospace;
      border-right: none;
      border-left: none;
      outline: none;
   `

   var labelCSS = css`
      display: none;
      border: none;
      position: absolute;
      top: -37px;
      left: 0;
      width: auto;
      font-size: 1em;
      background: #ececec;
      padding: 0.4em 1.4em 0.4em 1.4em;
   `

   var buttonCSS = css`
      && {
         padding: 1em 1.4em 1em 2.4em;
         font-size: 1.4em;
         width: 400px;
         text-align: center;
         display: flex;
         justify-content: center;
         height: auto;
         line-height: auto;
         background-color: rgb(82, 167, 166);
         color: white;
         position: relative;
         border: none;

         &:hover {
            cursor: pointer;
            background-color: rgb(73, 155, 154);
         }

         svg {
            position: relative;
            top: 2px;
            left: -20px;
         }
      }
   `

   function copyToClipboard() {
      copy(builderState.shortcode)
      inputRef.current.select()
   }

   function onFocus(event) {
      event.target.select()
   }

   return (
      <div css={shortcodeCSS}>
         <label htmlFor='shortcode' css={labelCSS}>
            Shortcode created:
         </label>
         <input readOnly type='text' id='shortcode' ref={inputRef} value='[wps_products]' css={inputCSS} onFocus={onFocus} />
         <button css={buttonCSS} onClick={copyToClipboard}>
            <i className='fas fa-copy'></i> Copy shortcode
         </button>
      </div>
   )
}

export { Shortcode }
