import React from "react";
const ChartRose: React.FC<
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
        d="M9.778 8c-3.068 0-5.555 2.239-5.555 5h5.555z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 13c0 3.866 3.482 7 7.778 7v-7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.777 22c5.523 0 10-4.03 10-9h-10zM22 13C22 6.925 16.528 2 9.777 2v11z"
      />
    </svg>
  );
};
export default ChartRose;
