import React from "react";
const Pie: React.FC<
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
        d="M12 4c9 0 10 8.027 10 8.027 0 2.313-3.434 2.708-4 .502-.503 1.961-3.497 1.961-4 0-.252.98-1.126 1.471-2 1.471s-1.748-.49-2-1.471c-.503 1.961-3.497 1.961-4 0-.566 2.206-4 1.81-4-.502C2 12.027 3 4 12 4M15 7.5l.5 1M9 7.5l-.5 1M12 7v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.5 14 1.474 3.538c.498 1.194.746 1.79 1.25 2.126S7.374 20 8.667 20h6.666c1.293 0 1.94 0 2.443-.336s.753-.932 1.25-2.126L20.5 14"
      />
    </svg>
  );
};
export default Pie;
