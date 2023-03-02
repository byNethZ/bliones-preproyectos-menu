import React from 'react'
import { Item } from '../../model/item.interface'

type Params = {
  item: Item
}

const CardSummary = ({item}: Params) => {
  return (
    <div>{item.name}</div>
  )
}

export default CardSummary