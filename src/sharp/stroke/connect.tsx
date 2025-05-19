import React from "react";
const Connect: React.FC<
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
        d="m10.01 10.013 2.002-2.003m2.003 6.01 2.002-2.003"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.083 4.987a4.25 4.25 0 0 1 1.167 1.95c.793 2.851-.563 4.579-1.308 5.245L17.6 13.48l-7.083-7.072c2.242-2.238 2.707-2.722 4.98-2.92.87.005 2.45.406 3.587 1.5Zm0 0 2.443-2.476M5.01 19.072a4.25 4.25 0 0 0 1.944 1.174c2.849.801 4.58-.55 5.248-1.293l1.3-1.34-7.047-7.107c-2.243 2.236-2.73 2.7-2.933 4.973.002.872.398 2.453 1.488 3.593Zm0 0L2.527 21.51"
      />
    </svg>
  );
};
export default Connect;
