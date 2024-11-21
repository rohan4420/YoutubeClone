import React from 'react'
import SearchBar from './SearchBar'

const AppBar = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex justify-between pt-2 p-3'>
            Youtube
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            Sign in
        </div>
    </div>
  )
}

export default AppBar