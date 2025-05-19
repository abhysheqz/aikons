import React from "react";
const Winking: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        fill="#D9D9D9"
        fillRule="evenodd"
        d="M7.999 9h.009z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.999 9h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 7.5c-.5.5-1 1.5-1 2 .445-.445.99-.517 1.5-.5.637.021 1.223.223 1.5.5M8 15a5 5 0 0 0 4 2 5 5 0 0 0 4-2"
      />
    </svg>
  );
};
export default Winking;
