import React from "react";
const ColumnInsert: React.FC<
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
        d="M15 22a1 1 0 0 1-1-1V8.001a1 1 0 0 1 1.001-1l5 .007a1 1 0 0 1 .999 1V21a1 1 0 0 1-1 1zM4 22a1 1 0 0 1-1-1V8.001a1 1 0 0 1 1.001-1l5 .007a1 1 0 0 1 .999 1V21a1 1 0 0 1-1 1zM15 2l-3 2.5L9 2"
      />
    </svg>
  );
};
export default ColumnInsert;
