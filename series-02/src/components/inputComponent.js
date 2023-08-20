import React from 'react'

const inputComponent = ({
    label,
    name,
    value,onChange
}) => {
  return (
    <div>
        <label for={label}>{label}</label>
        <input name={name}
                value={value}
                onChange={onChange}
        />
    </div>
  )
}

export default inputComponent