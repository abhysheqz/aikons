import React from "react";
const BorderLeft_02: React.FC<
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
        d="M6.5 2.5h-1a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h1m3.5-19h4m-4 19h4m3.75 0h.75a3 3 0 0 0 3-3v-.75m0-7.75v4m0-7.75V5.5a3 3 0 0 0-3-3h-.75"
      />
    </svg>
  );
};
export default BorderLeft_02;
