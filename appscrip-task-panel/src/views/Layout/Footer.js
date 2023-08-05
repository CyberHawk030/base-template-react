import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-px-3 tw-items-center tw-relative tw-bottom-0 tw-w-full'>
      <div><p className='tw-m-1'>Made By Bhuvaneshwaran</p></div>
      <div><Link to='https://github.com/captcha781'>Captcha781</Link></div>
    </footer>
  )
}

export default Footer