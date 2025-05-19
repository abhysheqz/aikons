import React from "react";
const AiInnovation_03: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14M16.5 16H7l.508 1.604A2 2 0 0 0 9.415 19h4.67a2 2 0 0 0 1.907-1.396z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 19-.544 1.633A2 2 0 0 1 12.559 22h-1.117a2 2 0 0 1-1.898-1.367L9 19M8 10l2 2.5V16m-1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 10l-2 2.5V16m1-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
      />
    </svg>
  );
};
export default AiInnovation_03;
