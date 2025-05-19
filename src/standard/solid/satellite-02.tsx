import React from "react";
const Satellite_02: React.FC<
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
        d="M16.201 1.25a.75.75 0 0 1 .53.22l5.8 5.799a.75.75 0 0 1 0 1.06 4.85 4.85 0 1 1-6.86-6.86.75.75 0 0 1 .53-.219"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.707 7.293a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.93 8.177a1.75 1.75 0 0 1 2.476 0l2.417 2.418a1.75 1.75 0 0 1 0 2.475l-4.667 4.667a3.46 3.46 0 0 1-4.893-4.893zM4.763 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L7.237 9.823a1.75 1.75 0 0 1-2.474 0L2.177 7.237a1.75 1.75 0 0 1 0-2.474zM16.763 14.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474l-2.586 2.586a1.75 1.75 0 0 1-2.474 0l-2.586-2.586a1.75 1.75 0 0 1 0-2.474z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.293 7.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414m6 6a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Satellite_02;
