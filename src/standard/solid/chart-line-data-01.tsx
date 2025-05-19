import React from "react";
const ChartLineData_01: React.FC<
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
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.895 3.553a1 1 0 0 1-.448 1.341l-1.676.838-3.355 7.669a1 1 0 0 1-1.585.342l-4.098-3.688-6.875 11.46a1 1 0 0 1-1.715-1.03l7.5-12.5a1 1 0 0 1 1.526-.228l3.97 3.573 2.945-6.73a1 1 0 0 1 .469-.494l2-1a1 1 0 0 1 1.342.447"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartLineData_01;
