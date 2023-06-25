import React, {useState} from 'react'
import RedTag from './Tags/RedTag'
import OrangeTag from './Tags/OrangeTag'
import YellowTag from './Tags/YellowTag'

import axios from 'axios'

const characters = ['a', 'b']
// For Search
const searchKeys =  [
    'name',
    'company',
    'species'
]

const headings = [
    "Option 1",
    "Option 2",
    "Option 3"
]

const helpers = [
  {
    "name" : "Dr Sneha",
    "profession": "Child Specialist",
    "contact": "9898975765"
  },
  {
    "name" : "Kumaraswamy",
    "profession": "Ambulance Driver",
    "contact": "9898975765"
  },
  {
    "name" : "Mr Krishna",
    "profession": "NGO Volunteer",
    "contact": "9898975765"
  },
  {
    "name" : "Dr Sneha",
    "profession": "Child Specialist",
    "contact": "9898975765"
  },
  {
    "name" : "Dr Sneha",
    "profession": "Child Specialist",
    "contact": "9898975765"
  },
  {
    "name" : "Dr Sneha",
    "profession": "Child Specialist",
    "contact": "9898975765"
  }
]
const studentData = [
  {studentName: "Tarun Reddy", noReply: "18 weeks"},
  {studentName: "Atharva", noReply: "4 weeks"},
  {studentName: "Sachin", noReply: "2 weeks"},
  {studentName: "Ram", noReply: "1 weeks"},
  {studentName: "Tarun Reddy", noReply: "0 weeks"},
  {studentName: "Raghav", noReply: "0 weeks"},
  {studentName: "Chintu", noReply: "0 weeks"}
]

export default function Dashboard() {
  const sendSMS = () => {
    axios.get("http://localhost:4000/child/sms").then(suc => alert('SMSs sent successfully'))
  }
  return(
    <>
    <body className="flex bg-gray-100 min-h-screen">
  
  <div className="flex-grow text-gray-800">
    <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
      <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
        <span className="sr-only">Menu</span>
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
      
      <div className="flex flex-shrink-0 items-center ml-auto">
        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
          <span className="sr-only">User Menu</span>
          <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span className="font-semibold">John Babu</span>
            <span className="text-sm text-gray-600">Admin Hyderabad</span>
          </div>
          <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1603185030522-05d4497bb180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwY2hpbGR8ZW58MHx8MHx8fDA%3D&w=1200&q=80" alt="user profile photo" className="h-full w-full object-cover" />
          </span>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg> 
        </button>
        <div className="border-l pl-3 ml-3 space-x-1">
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
          </button>
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Log out</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
          </button>
        </div>
      </div>
    </header>
    <main className="p-6 sm:p-10 space-y-6">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
          <h2 className="text-gray-600 ml-0.5">Monitor Children</h2>
        </div>
        
      </div>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">262</span>
            <span className="block text-gray-500">Students</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">258</span>
            <span className="block text-gray-500">Positive Replies</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
          <div>
            <span className="inline-block text-2xl font-bold">4</span>
            <span className="inline-block text-xl text-gray-500 font-semibold">(1.52%)</span>
            <span className="block text-gray-500">Students that have not replied</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          
          <div className="flex flex-wrap items-start justify-end -mb-3">
          <button onClick={sendSMS} className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Send SMS
          </button>
        </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
      <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
        <div className="px-6 py-5 font-semibold border-b border-gray-100">Students that need immediate attention</div>
        {
          ["", "", ""].map(el => <>
          
          <div className="p-4 flex-grow flex flex-row">
        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden ">
          <img src="https://images.unsplash.com/photo-1603185030522-05d4497bb180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwY2hpbGR8ZW58MHx8MHx8fDA%3D&w=1200&q=80" alt="Annette Watson profile picture" />
        </div>
        <div className='basis-1/4'>{<RedTag content="2"/>}</div>
        <div className='basis-1/4'>{<OrangeTag content="2"/>}</div>
        <div className='basis-1/4'>{<YellowTag content="2"/>}</div>
        </div>

          </>)
        }
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">2,50,000</span>
            <span className="block text-gray-500">Total Donations available</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">5,000</span>
            <span className="block text-gray-500">Value of amount to be raised</span>
          </div>
        </div>
        <div className="row-span-3 bg-white shadow rounded-lg">
          <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
            <span>Students by order of attention</span>
            <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
              Descending
              <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

          </div>
          <div className="overflow-y-auto" style={{maxHeight: "24rem"}}>
            <ul className="p-6 space-y-6">
              {
               studentData.map(week => <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1603185030522-05d4497bb180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwY2hpbGR8ZW58MHx8MHx8fDA%3D&w=1700&q=80" alt="" />
                </div>
                <span className="text-gray-600">{week.studentName}</span>
                <span className="ml-auto font-semibold">{week.noReply}</span>
              </li>)
              }
            </ul>
          </div>
        </div>
        <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b border-gray-100">Healthcare/Helpful Volunteers</div>
          <div className="p-4 flex-grow flex flex-col">
               {helpers.map((helper) => {
                return <>


                  <div className='flex flex-auto'>
                  <div>{helper.name}</div> <span>..... </span>
                  {/* <span>{helper.contact}</span> */}
                  <span>{helper.profession}</span> <span>..... </span> <a href= {`tel:+${helper.contact}`}>Call</a>
                  </div>
                  <br />
                </>
               })}
          </div>
        </div>
      </section>
      <section className="text-right font-semibold text-gray-500">
      </section>
    </main>
  </div>
</body>
    
    </>
  )
}
