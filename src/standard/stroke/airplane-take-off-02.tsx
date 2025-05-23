import React from "react";
const AirplaneTakeOff_02: React.FC<
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
        d="M22 19H6M20 13.5 22 8l-2.5-1.5-2 2.5-7.041-3.66c-1.633-.853-3.538-1.168-5.22-.414-.888.4-1.87.951-2.737 1.694-.971.833-.439 2.252.786 2.633L9 11l1 2.5 4.5 1.5-1-3z"
      />
    </svg>
  );
};
export default AirplaneTakeOff_02;
