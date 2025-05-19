import React from "react";
const QuillWrite_01: React.FC<
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
        d="M20 2C7 2 5 8 5 17c2.725 0 7.925-.825 11.103-4.723.58-.71.442-1.732-.207-2.381L14.5 8.5C20 7 20 3 20 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 22c0-5 3-9.5 6.5-12"
      />
    </svg>
  );
};
export default QuillWrite_01;
