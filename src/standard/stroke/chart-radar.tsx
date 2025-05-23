import React from "react";
const ChartRadar: React.FC<
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
        d="m2.547 9.202 8.847-6.74a1 1 0 0 1 1.212 0l8.847 6.74a1 1 0 0 1 .353 1.077l-3.231 11.003a1 1 0 0 1-.96.718H6.385a1 1 0 0 1-.96-.718L2.194 10.279a1 1 0 0 1 .353-1.077"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.99 9.001 16 11.5l-1.501 5H9.5l-1.5-5zM2.5 9.5l5.5 2M14.5 16.5l3 5M16 11.5l5.5-2M6.5 21l3-4.5M12 9V3"
      />
    </svg>
  );
};
export default ChartRadar;
