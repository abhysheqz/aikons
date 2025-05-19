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
        d="M14 22V7l7 .01V22zM3 22V7l7 .01V22z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m15 2-3 2.5L9 2" />
    </svg>
  );
};
export default ColumnInsert;
