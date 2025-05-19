import React from "react";
const ColumnDelete: React.FC<
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
        d="M3 21a1 1 0 0 1-1-1V4.002a1 1 0 0 1 1.002-1l5 .008a1 1 0 0 1 .998 1V20a1 1 0 0 1-1 1zM13 3.5V20a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-7.5M22 9l-6-6m6 0-6 6"
      />
    </svg>
  );
};
export default ColumnDelete;
