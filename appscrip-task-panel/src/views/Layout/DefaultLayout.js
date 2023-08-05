import React from 'react'
import Header from './Header'
import Content from './Content'

const DefaultLayout = () => {
  return (
    <div className="tw-flex tw-flex-col">
      <Header />
      <Content />
    </div>
  )
}

export default DefaultLayout
