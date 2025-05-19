import React from "react";
const Heading_02: React.FC<
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
        d="M3.5 5v14M13.5 5v14M20.5 19h-4v-.31c0-.438 0-.657.087-.852.086-.194.249-.34.575-.634l2.605-2.344c.467-.42.733-1.018.733-1.646V13a2 2 0 1 0-4 0v.4M3.5 12h10"
      />
    </svg>
  );
};
export default Heading_02;
