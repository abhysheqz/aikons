import React from "react";
const PieChart_09: React.FC<
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
        d="M10.25 3a.75.75 0 0 1 .75-.75 10.75 10.75 0 0 1 7.677 18.275.75.75 0 0 1-1.06.01l-7.142-7A.75.75 0 0 1 10.25 13z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.913 5.238a.75.75 0 0 1-.442.965 7.25 7.25 0 1 0 5.247 13.52.75.75 0 0 1 .563 1.39A8.75 8.75 0 1 1 7.948 4.797a.75.75 0 0 1 .965.442"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PieChart_09;
