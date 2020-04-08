import React, { Component, useState , useEffect } from 'react'

const TestHook = () => {
  const [state, setState] = useState("");

  const updateValue = e => {
    setState(e.target.value)
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return(
    <div>
      <input name="test" value={state} onChange={updateValue} placeholder="text here" />
    </div >
    )
  
}

export default TestHook