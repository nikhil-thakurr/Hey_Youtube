import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex my-2 shadow-sm rounded-lg p-2'>
        <img
          className="h-6 "
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt=""
        />

        <p className='font-bold px-2'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage