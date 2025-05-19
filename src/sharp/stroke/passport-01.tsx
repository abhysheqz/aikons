import React from "react";
const Passport_01: React.FC<
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
        d="M2 2v20h16V2zM18 6h4l-4 16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 6a4 4 0 0 1 0 8m0-8a4 4 0 1 0 0 8m0-8c-.828 0-1.5 1.79-1.5 4s.672 4 1.5 4m0-8c.828 0 1.5 1.79 1.5 4s-.672 4-1.5 4M6 17h8"
      />
    </svg>
  );
};
export default Passport_01;
