import React from "react";
const Csv_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M13.5 16H10v3h3.5v3H10m5.969-6L18 22h.5l2-6m-13 1v-1h-4v6h4v-1"
      />
    </svg>
  );
};
export default Csv_01;
