import React from "react";
const PieChart: React.FC<
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
        d="M20.5 15.828c-2.501 5.928-10.636 7.656-15.299 3.036C.63 14.334 2.045 6.13 8.057 3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.472 12.5c.199-2.64-.652-5.362-2.673-7.364C16.772 3.128 14.09 2.32 11.5 2.533V12.5z"
      />
    </svg>
  );
};
export default PieChart;
