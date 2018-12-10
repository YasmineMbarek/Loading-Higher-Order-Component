import React from 'react'
import Rating from './Rating'

const RatingFilter = ({rChange, count}) => (
    <div >
        <p>Minimum rating</p>
        <Rating count={count}  changerating={(newr) =>{  rChange(newr) }} />
      </div>
)

export default RatingFilter