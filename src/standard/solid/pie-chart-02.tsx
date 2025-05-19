import React from "react";
const PieChart_02: React.FC<
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
        d="M11.75 2a.75.75 0 0 1 .75-.75c5.66 0 10.25 4.59 10.25 10.25a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75zM10.263 3.25C5.221 3.634 1.25 7.853 1.25 13s3.971 9.366 9.013 9.75zM11.765 22.75c4.794-.365 8.62-4.197 8.985-8.998h-8.985z"
      />
    </svg>
  );
};
export default PieChart_02;
