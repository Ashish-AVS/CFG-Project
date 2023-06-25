import React from 'react'

export default function RedTag({content}) {
  return (
    <div><div
    class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
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
      class="feather feather-archive mr-2"
    >
      <polyline points="21 8 21 21 3 21 3 8"></polyline>
      <rect x="1" y="3" width="22" height="5"></rect>
      <line x1="10" y1="12" x2="14" y2="12"></line>
    </svg>
    {content}
  </div></div>
  )
}
