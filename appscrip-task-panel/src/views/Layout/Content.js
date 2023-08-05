import React, { Suspense } from 'react'
import SuspenseLoader from '../Loader/SuspenseLoader'
import LayoutRoutes from './LayoutRoutes'
import Footer from './Footer'

const Content = () => {
  return (
    <div className='container-fluid tw-flex-1 tw-h-full'>
        <Suspense fallback={<SuspenseLoader/>}>
            <LayoutRoutes />
        </Suspense>
        <Footer/>
    </div>
  )
}

export default Content