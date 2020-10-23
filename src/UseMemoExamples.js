import React, { useMemo, useState } from 'react'

function UseMemoExample() {
  console.log('useMemoExample component rendered');

  function addSome(num) {
    console.log('addSome was called');
    return num + 100;
  }

  function addSomeCopy(num) {
    console.log('addSomeCopy was called');
    return num + 100;
  }

  const [fakeValue, setFakeValue] = useState('');
  const someNumber = 10;
  const memoizedValue = useMemo(() => addSome(someNumber), [someNumber]);
  const nonMemoizedValue = addSomeCopy(someNumber)

  return (
    <div>
      <hr />
      <p>UseMemo Example</p>
      <p>{memoizedValue} {nonMemoizedValue} {fakeValue}</p>
      <button onClick={() => {setFakeValue(Date.now())}}>This button does nothing, but the component will re-render when clicked</button>
    </div>
  )
}

export default UseMemoExample
