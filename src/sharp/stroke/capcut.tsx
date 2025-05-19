import React from "react";
const Capcut: React.FC<
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
        d="M9.998 12 2 16v3.5h16V16m-8.002-4 11.998-6M9.998 12 2 8V4.5h16V8m-8.002 4 11.998 6"
      />
    </svg>
  );
};
export default Capcut;
