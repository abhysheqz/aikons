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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4 20-2 2M20 4l2-2m-6.5 6.5-7 7M16 4l-1-1-2.5 2.5 6 6L21 9l-1-1m-4-4 2-2 4 4-2 2m-4-4 4 4M8 20l1 1 2.5-2.5-6-6L3 15l1 1m4 4-2 2-4-4 2-2m4 4-4-4"
      />
    </svg>
  );
};
export default Dumbbell_02;
