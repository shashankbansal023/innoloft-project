import React from "react"

const TrlIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#9CA3AF" clipPath="url(#a)">
      <path d="M16.584 13.166h-5a.75.75 0 0 1-.75-.75V3.251a.75.75 0 0 1 1.5 0v8.415h4.25a.75.75 0 1 1 0 1.5Z" />
      <path d="M12 24a12.026 12.026 0 1 1 10.138-5.599.75.75 0 1 1-1.268-.802 10.53 10.53 0 1 0-3.271 3.27.75.75 0 1 1 .802 1.27A11.963 11.963 0 0 1 12 24Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default TrlIcon;

