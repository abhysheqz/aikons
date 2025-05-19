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
        fill="currentColor"
        d="M3.25 5.748a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M14.926 10.155l-1.208 2.75v8.342h-1.5v-8.116l-4.332-3.124-1.093 1.436.342 2.054H8.95v1.5H6.5a.75.75 0 0 1-.74-.627l-.5-3a.75.75 0 0 1 .143-.577l1.74-2.287.957-1.212 3.256-4.487 1.214.88L10.82 6.1l3.37 2.622 5.433-5.97 1.127.99z"
      />
    </svg>
  );
};
export default WorkoutKicking;
