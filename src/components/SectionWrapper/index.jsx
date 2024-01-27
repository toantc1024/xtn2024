import React from 'react'

const index = ({children, background}) => {
  return (
    <div className={`${background} min-h-screen w-full flex items-center justify-center`}>{children}</div>
  )
}

export default index