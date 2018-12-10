import React from 'react'
const Rating = ({count, changerating}) => {
    let ratingdisplay = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
          
            ratingdisplay.push(<span onClick={() => changerating(i+1)} key={i}> &#9733; </span>);
        }
        else {
         
            ratingdisplay.push(<span onClick={() => changerating(i+1)} key={i}> - </span>);
        }
    }
    return (
        <span>{ratingdisplay}</span>
    )
}

export default Rating