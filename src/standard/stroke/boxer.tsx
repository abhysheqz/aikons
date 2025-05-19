import React from "react";
const Boxer: React.FC<
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
        d="M4 3h16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4 6-1.714 4.285A4 4 0 0 0 2 11.77V21h8v-4.586a1 1 0 0 1 .293-.707L12 14m8-8 1.714 4.285A4 4 0 0 1 22 11.77V21h-8v-4.586a1 1 0 0 0-.293-.707L12 14m-2-2 2 2M10.5 8.5 12 6l2.5 4.5"
      />
    </svg>
  );
};
export default Boxer;
