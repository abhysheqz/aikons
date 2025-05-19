import React from "react";
const Touch_04: React.FC<
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
        strokeWidth={1.5}
        d="M7.416 15.03V10.5m0 0V4.25a1.75 1.75 0 1 1 3.5 0V9.5H16.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-2.513-3.857c-.871-1.328-.97-1.942-.986-2.613a3 3 0 0 1 .115-.895c.184-.646.66-1.19 1.614-2.28z"
      />
    </svg>
  );
};
export default Touch_04;
