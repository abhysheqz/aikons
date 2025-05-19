import React from "react";
const DeleteRow: React.FC<
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
        d="M6 21.5h-.5a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H18M9 21.5l3-3m0 0 3-3m-3 3-3-3m3 3 3 3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 9h19M8.5 2.5V9m7-6.5V9"
      />
    </svg>
  );
};
export default DeleteRow;
