import React from "react";
const Timer_01: React.FC<
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
        d="M7.527 6.418a.75.75 0 0 1 .938-.007l5.42 4.28a2.268 2.268 0 0 1 .011 3.555 2.297 2.297 0 0 1-3.486-.758L7.33 7.336a.75.75 0 0 1 .197-.918"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2a1 1 0 0 1 1-1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12a10.97 10.97 0 0 1 3.3-7.856 1 1 0 1 1 1.4 1.429A8.97 8.97 0 0 0 3 12a9 9 0 1 0 10-8.945V4.5a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Timer_01;
