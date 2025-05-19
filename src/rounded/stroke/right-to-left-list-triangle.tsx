import React from "react";
const RightToLeftListTriangle: React.FC<
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
        d="M3 5.5h10M18.6 16.893c-1.067.714-1.6 1.071-1.6 1.607s.533.893 1.6 1.607c1.067.715 1.6 1.072 2 .804s.4-.982.4-2.411 0-2.143-.4-2.411-.933.09-2 .804ZM18.6 3.893C17.533 4.607 17 4.964 17 5.5s.533.893 1.6 1.607c1.067.715 1.6 1.072 2 .804S21 6.93 21 5.5s0-2.143-.4-2.411-.933.09-2 .804ZM3 12h10M3 18.5h10"
      />
    </svg>
  );
};
export default RightToLeftListTriangle;
