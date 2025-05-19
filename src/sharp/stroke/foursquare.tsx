import React from "react";
const Foursquare: React.FC<
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
        d="M16.987 9.014h-5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.011 1.999H18.99a.01.01 0 0 1 .01.012l-2.982 13.673h-5.02l-5.979 6.314a.01.01 0 0 1-.017-.007V2.01a.01.01 0 0 1 .01-.01Z"
      />
    </svg>
  );
};
export default Foursquare;
