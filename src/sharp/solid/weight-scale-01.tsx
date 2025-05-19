import React from "react";
const WeightScale_01: React.FC<
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
        d="M3.339 1.646A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .624 1.166l-2 3A.75.75 0 0 1 18 5.75H6a.75.75 0 0 1-.624-.334l-2-3a.75.75 0 0 1-.037-.77"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 8A.75.75 0 0 1 5 7.25h14a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75zM12 12.75A3.25 3.25 0 0 0 8.75 16h-1.5a4.75 4.75 0 1 1 9.5 0h-1.5A3.25 3.25 0 0 0 12 12.75m.67 4.585 1-2-1.342-.67-1 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 5v3H9V5zm4 0v3h-2V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WeightScale_01;
