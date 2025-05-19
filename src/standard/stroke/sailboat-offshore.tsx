import React from "react";
const SailboatOffshore: React.FC<
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
        d="M6 19c-2.4-1.6-3-3.667-3-5h18c0 1.333-.6 3.4-3 5M14 2l4 8H7zM14 14V2M2 21.608c.8.498 1.833.498 2.652 0 1.306-.81 3.003-.81 4.328 0 0 .019.02.019.02.019.8.497 1.852.497 2.652 0a4.19 4.19 0 0 1 4.348 0c.8.497 1.833.479 2.652-.019A4.14 4.14 0 0 1 22 21.173"
      />
    </svg>
  );
};
export default SailboatOffshore;
