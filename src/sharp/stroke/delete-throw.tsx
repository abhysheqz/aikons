import React from "react";
const DeleteThrow: React.FC<
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
        strokeWidth={1.5}
        d="m9 13 3-3 3 3m-3 5v-7.527"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.5 5.5-1 16.5h-13l-1-16.5M2 5.5h6m14 0h-6m0 0L14.5 2h-5L8 5.5m8 0H8"
      />
    </svg>
  );
};
export default DeleteThrow;
