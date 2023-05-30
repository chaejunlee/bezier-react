import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgScreenshare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-2.5a1 1 0 1 1 0-2H18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4V8Z"
      />
      <path
        fill="currentColor"
        d="M13 11.414V19a1 1 0 1 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 9a2 2 0 0 1 2.828 0l3.293 3.293a1 1 0 0 1-1.414 1.414L13 11.414Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgScreenshare)
