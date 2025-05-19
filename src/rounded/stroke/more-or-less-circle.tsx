import React from "react";
const MoreOrLessCircle: React.FC<
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
        strokeWidth={1.5}
        d="M7.5 12h9M16.503 9.302h-7.04c-.986 0-1.82.047-1.943-.287-.096-.261.4-.915.88-1.515M7.505 14.699h7.04c.986 0 1.82-.048 1.943.286.096.261-.4.915-.88 1.515"
      />
    </svg>
  );
};
export default MoreOrLessCircle;
