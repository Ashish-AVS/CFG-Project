import React from 'react'

export default function Post() {
  return (
    <div>

<div className="bg-white mt-3">
        <img className="h-screen flex items-center justify-center border rounded-t-lg shadow-lg " src="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1520224068/p/photo/image/2462141/DSC00003.jpg" />
        <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
          House Sharing
        </div>
        <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
          <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">Call at 9898767654</div>
          <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">Share</div>
          <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">Comment</div>
        </div>
        
        <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
          <div className="w-full">
            <div className="w-full text-left text-xl text-gray-600">
              @Ravi Teja
            </div>
            'Hi, I am a Young adult of rainbow house foundation. I need a place to stay! Would like 
            to connect with other alumni of rainbow house for sharing a sweet home
          </div>
        </div>
      </div>


    </div>
  )
}
