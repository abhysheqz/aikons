import React from "react";
const Mail_02: React.FC<
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
        d="M2 3.5h20v17H2z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m6 8 6 4 6-4" />
    </svg>
  );
};
export default Mail_02;
