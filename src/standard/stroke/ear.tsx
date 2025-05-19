import React from "react";
const Ear: React.FC<
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
        d="M6.077 18c0 2.21 1.149 4 3.23 4s3.77-1.5 4.308-4c.259-1.199.788-1.923 1.616-2.5C17.385 14 19 11.692 19 9A7 7 0 1 0 5 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15c1.385 0 2.508-1.007 2.508-2.25S10.385 10.5 9 10.5C9 8.483 9.464 6 12.01 6 13.8 6 14.85 7.224 15 9"
      />
    </svg>
  );
};
export default Ear;
