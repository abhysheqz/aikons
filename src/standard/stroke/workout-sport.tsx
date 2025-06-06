import React from "react";
const WorkoutSport: React.FC<
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
        d="M16 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 12 1.848-3.175a1 1 0 0 1 .546-.445l3.68-1.237a1 1 0 0 1 .816.08l2.847 1.627a1 1 0 0 1 .398.42l1.02 2.04a1 1 0 0 0 1.1.531L19 11.475M11.5 7.5 8 14m0 0 1.973 2.763a1 1 0 0 1-.155 1.334L6.5 21M8 14h3.5m5.5 4-2.7-3.6a1 1 0 0 0-.8-.4h-2m0 0 3.476-4.966"
      />
    </svg>
  );
};
export default WorkoutSport;
