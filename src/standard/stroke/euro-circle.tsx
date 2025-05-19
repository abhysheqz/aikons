import React from "react";
const EuroCircle: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 9.5C15 8.5 14.194 8 13.106 8a2.606 2.606 0 0 0-2.606 2.606v2.788A2.606 2.606 0 0 0 13.106 16c1.088 0 1.894-.5 2.394-1.5m-7-2.5h5"
      />
    </svg>
  );
};
export default EuroCircle;
