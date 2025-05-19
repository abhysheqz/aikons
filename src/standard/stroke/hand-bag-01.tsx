import React from "react";
const HandBag_01: React.FC<
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
        strokeWidth={1.5}
        d="M16 11c0-6-2.134-9-4-9s-4 3-4 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 14.5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 9H6a1 1 0 0 0-1 1v5l-1.272 4.45A2 2 0 0 0 5.651 22H18.35a2 2 0 0 0 1.923-2.55L19 15v-5a1 1 0 0 0-1-1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 14.999h-5.036m-3.972 0H5"
      />
    </svg>
  );
};
export default HandBag_01;
