import React from 'react'

const InputComponent = ({
    label,
    name,
    value,onChange
}) => {
  return (
    <div>
        <label for={label}>{label}</label>
        &nbsp;
        <input name={name}
                value={value}
                onChange={onChange}
        />
    </div>
  )
}

export default InputComponent