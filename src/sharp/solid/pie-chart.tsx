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
        fill="currentColor"
        d="M11.438 1.786c2.787-.23 5.691.64 7.888 2.817 2.194 2.173 3.108 5.118 2.894 7.953l-.053.694H10.75V1.843z"
      />
      <path
        fill="currentColor"
        d="M9.25 2.123C4.925 3.325 1.75 7.292 1.75 12c0 5.66 4.59 10.25 10.25 10.25 4.708 0 8.675-3.174 9.877-7.5H9.25z"
      />
    </svg>
  );
};
export default PieChart;
