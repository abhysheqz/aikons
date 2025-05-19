import React from "react";
const ChartScatter: React.FC<
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
        d="M16.5 11A1.5 1.5 0 0 1 18 9.5h.009a1.5 1.5 0 0 1 0 3H18a1.5 1.5 0 0 1-1.5-1.5M18.5 4A1.5 1.5 0 0 1 20 2.5h.009a1.5 1.5 0 0 1 0 3H20A1.5 1.5 0 0 1 18.5 4M9.5 6A1.5 1.5 0 0 1 11 4.5h.009a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 6M9.5 11A1.5 1.5 0 0 1 11 9.5h.009a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 11M7.5 16A1.5 1.5 0 0 1 9 14.5h.009a1.5 1.5 0 0 1 0 3H9A1.5 1.5 0 0 1 7.5 16"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartScatter;
