import React from "react";
const SquareLockAdd_01: React.FC<
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
        d="M16.97 22v-8m-3.991 4h7.983"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.505 9.007V6.53c0-2.566-1.95-4.532-4.391-4.532S6.531 3.965 6.531 6.531l-.12 2.476m12.59 3.001V9.007H2.964L2.965 22h8.03"
      />
    </svg>
  );
};
export default SquareLockAdd_01;
