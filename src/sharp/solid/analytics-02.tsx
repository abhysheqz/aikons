import React from "react";
const Analytics_02: React.FC<
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
        d="M15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 5c0-.614.105-1.203.299-1.75H2a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V9.951a5.25 5.25 0 0 1-7-4.951m-2 13V9h-1.5v9zm5 0v-4h-1.5v4zm-10 0v-3h-1.5v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Analytics_02;
