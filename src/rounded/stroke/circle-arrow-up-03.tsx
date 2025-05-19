import React from "react";
const CircleArrowUp_03: React.FC<
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
        d="M14.515 12.504c-.53-.531-1.824-2.509-2.57-2.498-.737.08-1.914 2.003-2.434 2.508m2.524 4.49-.014-6.993M8 7.01l7.992-.016"
      />
    </svg>
  );
};
export default CircleArrowUp_03;
