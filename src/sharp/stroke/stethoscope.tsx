import React from "react";
const Stethoscope: React.FC<
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
        d="M13.001 2C14.105 2 15 2.931 15 4.08V6.5L9 10 3 6.5V4.08C3 2.93 3.895 2 4.999 2M9 14v3.5a4.5 4.5 0 0 0 9 0V16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14 7-2 5-3.03 2L6 12 4 7M21 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.009 13H18"
      />
    </svg>
  );
};
export default Stethoscope;
