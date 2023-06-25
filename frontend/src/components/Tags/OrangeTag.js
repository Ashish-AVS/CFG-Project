import React from 'react'

export default function OrangeTag({content}) {
  return (
    <div><div
    class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-activity mr-2"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
    {content}
  </div></div>
  )
}
