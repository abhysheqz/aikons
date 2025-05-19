import React from "react";
const Campfire: React.FC<
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
        d="M6 16s-1-1.5-1-4c0-4 1.5-5 1.5-5 1 2 2 2 2 2 0-5 3.5-7 3.5-7s3.5 2 3.5 7c0 0 1 0 2-2 0 0 1.5 1 1.5 5 0 2.5-1 4-1 4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 19H4v3h16z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 16c0-3-2.5-5-2.5-5s-2.5 2-2.5 5"
      />
    </svg>
  );
};
export default Campfire;
