import React from 'react'

export default function Header(props) {
  return (
    <div className='head'>
        <h1>{props.Season} {props.Year}</h1>
    </div>
  )
}
