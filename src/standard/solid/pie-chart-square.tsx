import React from "react";
const PieChartSquare: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm7.5 4.5A5.75 5.75 0 1 0 18 12.25a.75.75 0 0 0-.75-.75H13V7.25a.75.75 0 0 0-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PieChartSquare;
