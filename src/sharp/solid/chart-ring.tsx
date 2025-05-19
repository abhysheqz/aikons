import React from "react";
const ChartRing: React.FC<
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
        d="M4.952 3.89a10.72 10.72 0 0 1 7.06-2.64c5.693 0 10.353 4.418 10.738 10.012h-6.803A4.006 4.006 0 0 0 9.762 8.7zM3.89 4.952a10.72 10.72 0 0 0-2.64 7.06c0 5.693 4.418 10.353 10.012 10.738v-6.803A4.006 4.006 0 0 1 8.7 9.762zM12.764 15.947v6.803a10.765 10.765 0 0 0 9.986-9.986h-6.803a4.01 4.01 0 0 1-3.183 3.183"
      />
    </svg>
  );
};
export default ChartRing;
