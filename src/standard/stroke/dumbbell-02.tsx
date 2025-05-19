import React from "react";
const Dumbbell_02: React.FC<
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
        d="m4 20-1.5 1.5M20 4l1.5-1.5m-6 6-7 7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 4-.293-.293a1 1 0 0 0-1.414 0l-1.086 1.086a1 1 0 0 0 0 1.414l4.586 4.586a1 1 0 0 0 1.414 0l1.086-1.086a1 1 0 0 0 0-1.414L20 8m-4-4 1.293-1.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L20 8m-4-4 4 4M8 20l.293.293a1 1 0 0 0 1.414 0l1.086-1.086a1 1 0 0 0 0-1.414l-4.586-4.586a1 1 0 0 0-1.414 0l-1.086 1.086a1 1 0 0 0 0 1.414L4 16m4 4-1.293 1.293a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414L4 16m4 4-4-4"
      />
    </svg>
  );
};
export default Dumbbell_02;
