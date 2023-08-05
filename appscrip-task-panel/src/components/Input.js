import React from 'react'

const Input = (props) => {

   let { labelProps, inputProps, errorMsgProps } = props

  return (
    <div className="tw-flex tw-flex-col">
      <label className="tw-text-white tw-font-roboto" {...labelProps} >
        {labelProps.text || 'Label'}
      </label>
      <input
        {...inputProps}
        className="input-auth"
      />
      <small className="tw-text-red-500 tw-font-roboto" style={{ visibility:errorMsgProps?.message ?'visible':'hidden' }} {...errorMsgProps}>
        {errorMsgProps?.message || 'Error Text'}
      </small>
    </div>
  )
}

export default Input
