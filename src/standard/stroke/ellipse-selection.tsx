import React from "react";
const EllipseSelection: React.FC<
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
        d="M11 6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1l2 .002a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1zM3 14a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1l2 .002a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1zM19 14a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1l2 .002a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1zM11 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1l2 .002a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1zM14.065 4A8.28 8.28 0 0 1 20 9.935M10 4c-2.903.747-5.253 3.097-6 6m0 4c.747 2.903 3.032 5.253 5.935 6m4.13 0A8.28 8.28 0 0 0 20 14.065"
      />
    </svg>
  );
};
export default EllipseSelection;
