import React from "react";
const Castle: React.FC<
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
        d="M7 12H4.361a1 1 0 0 0-.989.852L2 22h4.5M17 12h2.639a1 1 0 0 1 .989.852L22 22h-4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7.5 6 22h12L16 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.493 5a1 1 0 0 0-1-1H7.498a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h8.995a1 1 0 0 0 1-1zM14.495 22l-.41-4.1a1 1 0 0 0-.995-.9h-2.188a1 1 0 0 0-.995.9l-.41 4.1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 4V2m4 2V2m4 2V2"
      />
    </svg>
  );
};
export default Castle;
