import React from "react";
const WorkoutBattleRopes: React.FC<
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
        d="M9 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 7-2.741 1.37a1 1 0 0 1-.547.101l-1.878-.188m0 0-2.086-.208a1 1 0 0 0-1.028.624l-1.475 3.689a1 1 0 0 0 .221 1.078l2.741 2.741a1 1 0 0 1 .293.707V21M7.834 8.283 5.19 15.185M19.999 8.998c-.584 0-1.134-.27-1.484-.73L17.488 6.92a5 5 0 0 0-.27-.339 1.88 1.88 0 0 0-2.222-.374"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17c-1.822 0-2.923-1.02-4.044-2.288C15.974 13.602 15 12.5 13.5 12.5m-2.5.063c-2 0-2.433-1.51-3.5-2.563"
      />
    </svg>
  );
};
export default WorkoutBattleRopes;
