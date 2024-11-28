import React from 'react'

export const Input = ({InputTxt,InputType , InputName,InputID, InputPlaceholder, InputPattern, SpanErrorMessage}) => {
  return (
    <label className="input-wrapper" htmlFor="username">
              {InputTxt}
              <input
                required
                type={InputType}
                name={InputName}
                id={InputID}
                placeholder={InputPlaceholder}
                pattern={InputPattern}
              />
              <span id="error-message">{SpanErrorMessage}</span>
            </label>
  )
}
