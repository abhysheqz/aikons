import React from "react";
const WorkoutStretching: React.FC<
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
        d="M16 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.726 8.214C8.226 10.714 7 17.632 7 21m3.726-12.786C8.877 6.966 8.452 4.69 9.75 3m.975 5.214L13.372 10m.988 5L17 12.5 13.373 10M15 21c-.973-1.135-1.974-2.7-2.95-4.142-.683-1.01-1.025-1.516-1.065-2.045M13.373 10a15.6 15.6 0 0 0-1.77 2.894c-.44.927-.659 1.39-.618 1.92m0 0L8 14"
      />
    </svg>
  );
};
export default WorkoutStretching;
