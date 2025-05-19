import React from "react";
const Investigation: React.FC<
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
        d="M19 9.5V2H3v18.999h6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.675 19.689 21 22m-1-5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7 7h8M7 11h3" />
    </svg>
  );
};
export default Investigation;
