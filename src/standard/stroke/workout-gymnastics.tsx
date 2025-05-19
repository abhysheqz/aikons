import React from "react";
const WorkoutGymnastics: React.FC<
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
        d="M7 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 3 .647 4.526c.053.377.099.696.133.974M7 16l1.882-3.765.22-.44M20 21l-2.72-8.612a2 2 0 0 0-.375-.684M9.78 8.5c.078.629.1 1.052.032 1.47-.084.516-.3.998-.71 1.824M9.78 8.5l6.36 2.643a2 2 0 0 1 .765.561m-7.803.09L14.625 14m0 0L12 21m2.625-7 2.28-2.296"
      />
    </svg>
  );
};
export default WorkoutGymnastics;
