import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-center m-5 bg-gray-600 text-white text-3xl p-11'>User: {id}</div>
  )
}

export default User