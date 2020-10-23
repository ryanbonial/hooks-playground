import React, { useState } from 'react'

function UseStateExample() {
  const [value, setValue] = useState('')
  return (
    <div>
      <hr />
      <p>UseState</p>
      <input value={value} onChange={e => setValue(e.target.value)} /> {value}
    </div>
  )
}

export default UseStateExample
