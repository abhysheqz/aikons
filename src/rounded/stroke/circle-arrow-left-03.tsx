import React from "react";
const CircleArrowLeft_03: React.FC<
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.503 9.492c-.531.53-2.51 1.822-2.5 2.567.08.738 2.001 1.916 2.506 2.436m4.493-2.52-6.993.008m-3.006 4.019-.01-7.992"
      />
    </svg>
  );
};
export default CircleArrowLeft_03;
