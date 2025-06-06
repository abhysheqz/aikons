import React from "react";
const Maps: React.FC<
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
        d="M8.012 3.001 2 6.083V20l6.012-2L15 21h7V6h-7zM8 3v14.5M15 6.5v14"
      />
    </svg>
  );
};
export default Maps;
