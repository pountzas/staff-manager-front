import React from 'react'

 const Page = ({params}) => {
  const {id} = params
  
  return (
    <div>page: {id}</div>
  )
}

export default Page