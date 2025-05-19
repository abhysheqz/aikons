import React from "react";
const BorderFull: React.FC<
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
        d="M5 22a2 2 0 0 1-2-2V4.001a2 2 0 0 1 2.001-2l14 .01a2 2 0 0 1 1.999 2V20a2 2 0 0 1-2 2zM15 9.5H7m3.556 5H7"
      />
    </svg>
  );
};
export default BorderFull;
