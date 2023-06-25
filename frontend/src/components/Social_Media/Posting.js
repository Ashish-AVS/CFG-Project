import React from 'react'
import Post from './Post'

export default function Posting() {
  return (
    <div>

<div className="w-full flex flex-row flex-wrap">
  <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  {/* <style style={{borderRadius: "50%"}}> */}


<div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center ">
  
  
  <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap">
    <div className="w-full text-right"><button className="p-2 fa fa-bars text-4xl text-gray-600"></button></div>
  </div>
  
  <div className="w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg">
    <div className="p-5 bg-white sticky top-0">
      <img className="border border-indigo-100 shadow-lg rounded" src="http://lilithaengineering.co.za/wp-content/uploads/2017/08/person-placeholder.jpg" />
      <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
        Ravi Teja
      </div>
    </div>
    <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer">
      <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href=""><i className="fa fa-cog text-gray-600 text-2xl pr-1 pt-1 float-right"></i>Settings</a>
      <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold" href=""><i className="fa fa-arrow-left text-gray-600 text-2xl pr-1 pt-1 float-right"></i>Log out</a>
    </div>
  </div>
  
  
  <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
    <div className="bg-white w-full shadow rounded-lg p-5">
      <textarea className="bg-gray-200 w-full rounded-lg shadow border p-2" rows="5" placeholder="Speak your mind"></textarea>
      
      <div className="w-full flex flex-row flex-wrap mt-3">
        <div className="w-1/3">
          <select className="w-full p-2 rounded-lg bg-gray-200 shadow border float-left">
            {
              ["House Pooling", "Carrer Guidance", "Carrer Advice", "Success Story", "Anonymus Post"].map(post => <option>{post}</option>)
            }
          </select>
        </div>
        <div className="w-2/3">
          <button type="button" className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg">Submit</button>
        </div>
      </div>
    </div>
    
    <div className="mt-3 flex flex-col">
      
      
    <Post />
      
    <div>

<div className="bg-white mt-3">
        <img className="h-screen flex items-center justify-center border rounded-t-lg shadow-lg " src="https://media.istockphoto.com/id/639475958/photo/data-entry.jpg?s=612x612&w=0&k=20&c=SDUdKLQbGGT8OkfCwQJ7Y-96UYEDb5F3TsJnoG99wGU=" />
        <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
          Job Opportunity
        </div>
        <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
          <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">Call at 9898767654</div>
          <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">Share</div>
          <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">Comment</div>
        </div>
        
        <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
          <div className="w-full">
            <div className="w-full text-left text-xl text-gray-600">
              @Surya Prakash
            </div>
            'Hi, I am an alumni of rainbow foundation, I have job openings for a data entry role. Salary: Rs10,000. Kindly contact me for further opportunities
          </div>
        </div>
      </div>


    </div>
     
      


    <div>

<div className="bg-white mt-3">
        <img className="h-screen flex items-center justify-center border rounded-t-lg shadow-lg " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrXnFbAQwcyYP-RZmnS2DlvvVU4HQn05i-uCyIUg&s" />
        <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
          Confession
        </div>
        <div className="bg-white p-1 border shadow flex flex-row flex-wrap">
          <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">Call at 9898767654</div>
          <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">Share</div>
          <div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">Comment</div>
        </div>
        
        <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
          <div className="w-full">
            <div className="w-full text-left text-xl text-gray-600">
              @Anonymus
            </div>
            'I feel alone in my heart. It's like a quiet place where loneliness stays. It sneaks in silently and holds me tight. The world feels far away, and I'm left alone. Other people's laughter sounds far off, reminding me of the empty space inside. I long for someone to be with, to connect with. The emptiness is always there, making me feel lonely. In this big world, I admit that I'm lonely. I hope someone understands and brings light to my life, to ease this sadness in my heart.
          </div>

          <div>I would love some help and support form people who have faced the issue previously</div>
        </div>
      </div>


    </div>
      
      
    </div>
  </div>
</div>

</div>


    </div>
  )
}
