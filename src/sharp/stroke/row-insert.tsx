import React from "react";
const RowInsert: React.FC<
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
        d="M22 3H7v7h15zM22 14H7v7h15z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m2 9 2.5 3L2 15" />
    </svg>
  );
};
export default RowInsert;
