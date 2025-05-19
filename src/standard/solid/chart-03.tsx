import React from "react";
const Chart_03: React.FC<
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
        d="M3 3a1 1 0 0 1 1 1v14a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.287 6.307A.75.75 0 0 1 20.75 7v10a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .22-.53l5-5a.75.75 0 0 1 1.06 0l2.97 2.97 4.97-4.97a.75.75 0 0 1 .817-.163"
      />
    </svg>
  );
};
export default Chart_03;
