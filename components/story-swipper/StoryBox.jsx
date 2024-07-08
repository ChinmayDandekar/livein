import React from 'react'

const StoryBox = ({ isActive }) => {
    return (
        <div className='w-full h-full relative flex items-center justify-center'>
            <video src="https://www.youtube.com/watch?v=9xwazD5SyVg" className='w-full h-full object-cover'></video>
        </div>
    )
}

export default StoryBox