import React from "react";
const WorkoutKicking: React.FC<
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
        d="M7 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.949 14H6.5L6 11l1.732-2.276M9.786 6 8.698 7.5l-.966 1.224M9.786 6l2.177-3M9.786 6l4.5 3.5m0 0L20 3m-5.714 6.5-1.318 3M7.732 8.724l5.236 3.776m0 0V21"
      />
    </svg>
  );
};
export default WorkoutKicking;
