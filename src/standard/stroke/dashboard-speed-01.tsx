import React from "react";
const DashboardSpeed_01: React.FC<
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
        d="M13.77 12.733 17 9m-2.692 5.867A2.144 2.144 0 0 1 12.154 17 2.144 2.144 0 0 1 10 14.867c0-1.179.964-2.134 2.154-2.134s2.154.955 2.154 2.134M6 12a6 6 0 0 1 9-5.197"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 2.5h-15a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
};
export default DashboardSpeed_01;
