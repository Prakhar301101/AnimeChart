import React from 'react'


export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bottom-container">
      ©<a target="_blank" href='https://github.com/Prakhar301101'> &nbsp; &nbsp;Prakhar Pandey&nbsp;&nbsp;</a>{year}
    </div>
  )
}
