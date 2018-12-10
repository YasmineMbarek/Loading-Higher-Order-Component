import React from 'react'
import Moviecard from './CardMovie'
import LoaderHoc from './LoaderHoc'
const Cardlist = ({movies, onAddMovie}) => (
     <div className="grid-container">
        {
            movies.map(el => <Moviecard movie={el} />)
        }
        <div onClick={() => {
            onAddMovie({
                id: Math.random(),
                name:  prompt('movie name is '),
                image:  prompt('movie poster is  '),
                description: prompt('movie description is '),
                rate:Number(prompt('movie rating is ')),
                alt: prompt('movie type is  ')
            })
        }}
     className="grid-item plus">+</div>
      </div>
)

export default LoaderHoc(Cardlist);