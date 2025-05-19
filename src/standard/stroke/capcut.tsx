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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.998 12 2 16v1.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V16m-8.002-4 11.998-6M9.998 12 2 8V6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V8m-8.002 4 11.998 6"
      />
    </svg>
  );
};
export default Capcut;
