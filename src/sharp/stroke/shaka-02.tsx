import React from "react";
const Shaka_02: React.FC<
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
        strokeWidth={1.5}
        d="M17.712 11.671 15.639 13.5c0-1.39 0-2.085-.201-2.613a2.94 2.94 0 0 0-2.061-1.828c-.538-.127-1.205-.023-2.54.183L6.9 10V4.75c0-.966-.76-1.75-1.7-1.75C4.262 3 3.5 3.784 3.5 4.75V17a4 4 0 0 0 4 4h5.486a4 4 0 0 0 3.213-1.619l3.923-5.293a1.78 1.78 0 0 0 .008-2.183 1.657 1.657 0 0 0-2.418-.234Z"
      />
    </svg>
  );
};
export default Shaka_02;
