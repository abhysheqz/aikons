import React from "react";
const Api: React.FC<
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
        d="M22 21V3H2v18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.496 15.502V8.493M9.33 12.986 8.001 9.01h-.989l-1.005 3.977m3.324 0 .67 2m-.67-2H6.007m0 0-.512 2m7.012.011v-3m0 0V9.01h2.255c.801.127 1.3.964 1.24 1.533-.057.557-.234 1.152-1.24 1.455z"
      />
    </svg>
  );
};
export default Api;
