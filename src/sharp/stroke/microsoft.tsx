import React from "react";
const Microsoft: React.FC<
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
        d="M22 13.5h-8.5V22H22zM10.5 2H2v8.5h8.5zM10.5 13.5H2V22h8.5zM22 2h-8.5v8.5H22z"
      />
    </svg>
  );
};
export default Microsoft;
