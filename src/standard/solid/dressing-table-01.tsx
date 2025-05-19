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
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3a5 5 0 0 0-5 5v5h10V8a5 5 0 0 0-5-5m7 10V8A7 7 0 1 0 5 8v5H4a1 1 0 1 0 0 2v7a1 1 0 1 0 2 0v-2h12v2a1 1 0 1 0 2 0v-7a1 1 0 1 0 0-2zm-7.47-8.53a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0m2 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0M10.75 16.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DressingTable_01;
