import React from "react";
const Knowledge_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 6H2M22 6h-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 10h7V4h-7zM3.5 10h7V4h-7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.5 5.5h-3M18.528 19.999H3.01a.01.01 0 0 1-.01-.01V14.01a.01.01 0 0 1 .01-.01h15.472M18.528 20h2.44m-2.44 0L18.482 14m2.518 0h-2.518"
      />
    </svg>
  );
};
export default Knowledge_02;
