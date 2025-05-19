import React from "react";
const BorderRight_02: React.FC<
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
        d="M17.5 2.5h1a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-1M14 2.5h-4m0 19h4m-7.75 0H5.5a3 3 0 0 1-3-3v-.75m0-7.75v4m0-7.75V5.5a3 3 0 0 1 3-3h.75"
      />
    </svg>
  );
};
export default BorderRight_02;
