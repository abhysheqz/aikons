import React from "react";
const Pentagon_01: React.FC<
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
        d="M6.562 22h10.877a2 2 0 0 0 1.94-1.515l2.31-9.24a2 2 0 0 0-.691-2.047L13.249 3a2 2 0 0 0-2.498 0L3.002 9.198a2 2 0 0 0-.69 2.047l2.31 9.24A2 2 0 0 0 6.561 22Z"
      />
    </svg>
  );
};
export default Pentagon_01;
