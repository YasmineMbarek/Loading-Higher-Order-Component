import React from 'react'
import Rating from'./Rating.js'
const Moviecard = (props,remove) => {
    const {movie = {}} = props
    const {
        id= '',
        name= 'xxx',
        image= 'http://kino.mediadem.nazwa.pl/media/cinema_poster/default-movie.png',
        description= 'xxx',
        rate='xxx',
        alt= 'xxx',
    } = movie
   
   
   
        return (
          <div className="container-item">
          <div  className="grid-item" >
             <div id={id}>
             <img src={image} alt={alt} />
            <div className="name-movie">{name} </div>
            <div className="desc-movie">{description} </div>
            <div className="ratingdiv"> <Rating count={rate} /></div>
            <button  onClick={()=>remove(id)}> Remove </button>
                        </div>
               </div>   
        </div>);
     
    }

export default Moviecard