import React from 'react'

export const Infocard = (props) => {
  return (
    <div className='infocard'>
        <div><img className="info-image" src={props.infoimage}/></div>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
    </div>
  )
}
