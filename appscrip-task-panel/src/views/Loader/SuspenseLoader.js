import React from 'react'
import { Spinner } from 'react-bootstrap'

const SuspenseLoader = () => {
  return (
    <div className='tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center'>
        <Spinner />
    </div>
  )
}

export default SuspenseLoader