import React from "react";
const DressingTable_01: React.FC<
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
        d="m9 7 2-2m-1 5 4-4M6 14V8a6 6 0 1 1 12 0v6M5 14v8m14-8v8M3 14h18M5 19h14M11 16.5h2"
      />
    </svg>
  );
};
export default DressingTable_01;
