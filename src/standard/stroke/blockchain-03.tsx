import React from "react";
const Blockchain_03: React.FC<
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
        d="M18 8.676 12 5.5 6 8.676m12 0V15.5l-6 3L6 15V8.676m12 0L12 11.5m0 0L6 8.676m6 2.824v6.49"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 6.5 12 2 3 6.5v11l9 4.5 9-4.5z"
      />
    </svg>
  );
};
export default Blockchain_03;
