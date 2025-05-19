import React from "react";
const GreenHouse: React.FC<
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
        d="m3.46 19-1.282-8.777a2 2 0 0 1 .828-1.925l7.809-5.492a2 2 0 0 1 2.295-.004l7.828 5.465a2 2 0 0 1 .821 2.008l-1.891 10.096a2 2 0 0 1-1.966 1.631L8.801 22A2.303 2.303 0 0 1 6.5 19.697c0-2.551 4.5-3.197 6-6.197M14.003 7c.457.997.641 3.094-2.02 3.488-3.325.492-5.106 3.406-3.206 6.36.995 1.547 5.765 2.064 7.665-1.875 1.403-2.513 0-6.976-2.439-7.973"
      />
    </svg>
  );
};
export default GreenHouse;
