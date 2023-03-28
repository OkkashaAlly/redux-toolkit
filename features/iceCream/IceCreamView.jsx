import React from 'react'
import { useSelector } from 'react-redux'

export const IceCreamView = () => {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCream)

  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button>Buy ice cream</button>
      <button>Restock ice creams</button>
    </div>
  )
}
