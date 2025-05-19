import React from "react";
const Sunrise: React.FC<
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
        d="M9.5 6.5C9.992 5.994 11.3 4 12 4m2.5 2.5C14.008 5.994 12.7 4 12 4m0 0v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.363 10.636 16.95 12.05M3 17h2M5.637 10.636 7.05 12.05M21 17h-2M21 20H3M16 17a4 4 0 0 0-8 0"
      />
    </svg>
  );
};
export default Sunrise;
