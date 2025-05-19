import React from "react";
const DragRight_02: React.FC<
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
        d="M7.75 6.5A2.25 2.25 0 0 1 12.25 6.5l.003 4.751H15.5a3.25 3.25 0 0 1 3.25 3.25v5a3.25 3.25 0 0 1-3.25 3.25H8.626L3.75 16.275a2.32 2.32 0 0 1-.004-2.877 2.27 2.27 0 0 1 3.278-.311l.002.001.723.632z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.22 2.469-1.061 1.06 1.72 1.72h-4.19v1.5h4.19l-1.72 1.72 1.06 1.06L20.75 6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 2.75a3.25 3.25 0 0 0-1.574 6.094.75.75 0 0 1-.728 1.312 4.75 4.75 0 1 1 4.604 0 .75.75 0 0 1-.728-1.312A3.25 3.25 0 0 0 10 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragRight_02;
