import React from "react";
const SailboatCoastal: React.FC<
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
        d="M6 19c-2.4-1.6-3-3.667-3-5h18c0 1.333-.6 3.4-3 5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 2 4 8H7zM14 14V2"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M2 22h20" />
    </svg>
  );
};
export default SailboatCoastal;
