import React from 'react'
import './btn.css'


export default function Downloadbutton() {

  return (
    <a href = "WISDOM-CV.pdf" download="WISDOM-CV.pdf">
      <button className='button' >
        Download CV
      </button>
    </a> 
  )
}
