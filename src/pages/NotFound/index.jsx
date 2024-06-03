import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <p className='border border-r'>404  </p> 
        <span><p>This Page Could Not Found </p>
        <Link to='/'>Go TO Home Page</Link></span>
    </div>
  )
}

export default index