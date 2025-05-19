import React from "react";
const HotTube: React.FC<
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
        d="M18.478 10.996a1.81 1.81 0 0 0 0-2.499 1.81 1.81 0 0 1 0-2.499m-3 4.998a1.81 1.81 0 0 0 0-2.499 1.81 1.81 0 0 1 0-2.499"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.978 13.995V9.497h4l4.5 6.997m-4.5-11.495a2 2 0 1 1-4-.001 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.99 13.992 5.97 21H17.98l2.01-7.008m-15.998 0H2m1.99 0h15.998m0 0h2.01"
      />
    </svg>
  );
};
export default HotTube;
