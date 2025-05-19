import React from "react";
const InsertRowDown: React.FC<
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
        d="M12 13.5v7m-3-2 3 3 3-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 9h19M8.5 2.5V9m7-6.5V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 21.5H5.5a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H17"
      />
    </svg>
  );
};
export default InsertRowDown;
