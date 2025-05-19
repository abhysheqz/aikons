import React from "react";
const SmartPhone_02: React.FC<
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
        d="M17 2H7a1.5 1.5 0 0 0-1.5 1.5v17A1.5 1.5 0 0 0 7 22h10a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 17 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2h-4l.5 1h3z"
      />
    </svg>
  );
};
export default SmartPhone_02;
