import React from 'react'

export const Input = ({InputTxt,InputType , InputName,InputID, InputPlaceholder, InputPattern, SpanErrorMessage}) => {
  return (
    <label className="input-wrapper" htmlFor="username">
              {label}
              <input
                required
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                pattern={pattern}
              />
              <span id="error-message">{SpanErrorMessage}</span>
            </label>
  )
}
