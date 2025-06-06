import React from "react";
const Telescope_02: React.FC<
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
        d="m19 22-5-9-5 9M16 4 5.832 10.009a1 1 0 0 0-.37 1.34l2.042 3.742a1 1 0 0 0 1.387.383L19 9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.22 4.456a1.637 1.637 0 0 1 2.834-1.637l2.727 4.725a1.637 1.637 0 0 1-2.834 1.637zM2 14.265l.738 1.367m0 0L3.5 17m-.762-1.368L6.5 13.5"
      />
    </svg>
  );
};
export default Telescope_02;
