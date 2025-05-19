import React from "react";
const Recycle_03: React.FC<
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
        fillRule="evenodd"
        d="M5.074 2.123a1 1 0 0 1 1.304-.549l3 1.223a1 1 0 0 1 .563 1.265l-1 2.777a1 1 0 0 1-1.882-.678l.28-.776a8 8 0 0 0-4.228 8.45 1 1 0 1 1-1.973.33 9.998 9.998 0 0 1 5.13-10.477l-.646-.262a1 1 0 0 1-.548-1.303m6.44 1.336a1 1 0 0 1 1.152-.82C17.396 3.431 21 7.543 21 12.5q0 .793-.12 1.553l.557-.38a1 1 0 0 1 1.126 1.654l-2.935 2a1 1 0 0 1-1.45-.364l-1.565-3a1 1 0 0 1 1.774-.925l.48.922Q19 13.25 19 12.5a8 8 0 0 0-6.665-7.89 1 1 0 0 1-.821-1.15M2.516 17.5a1 1 0 0 1 1-1H7a1 1 0 1 1 0 2H5.708a7.97 7.97 0 0 0 5.292 2c2.05 0 3.917-.77 5.333-2.037a1 1 0 1 1 1.334 1.49A9.97 9.97 0 0 1 11 22.5c-2.474 0-4.74-.9-6.484-2.387V21a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Recycle_03;
