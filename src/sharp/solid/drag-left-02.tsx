import React from "react";
const DragLeft_02: React.FC<
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
        d="M10.75 6.5a2.25 2.25 0 0 1 4.501-.001l.003 4.751H18.5a3.25 3.25 0 0 1 3.25 3.25v5a3.25 3.25 0 0 1-3.25 3.25h-6.874L6.75 16.275a2.32 2.32 0 0 1-.004-2.877 2.27 2.27 0 0 1 3.278-.311l.002.001.723.632z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.78 2.469 1.061 1.06-1.72 1.72h4.19v1.5H5.12l1.72 1.72-1.06 1.06L2.25 6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2.75a3.25 3.25 0 0 0-1.574 6.094l-.728 1.312a4.75 4.75 0 1 1 4.604 0l-.728-1.312A3.25 3.25 0 0 0 13 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragLeft_02;
