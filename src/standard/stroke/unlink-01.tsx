import React from "react";
const Unlink_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.143 10.691.207-.207a5.067 5.067 0 1 1 7.166 7.166l-2.866 2.866a5.067 5.067 0 1 1-7.166-7.166l.464-.464"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.052 11.114.464-.464a5.067 5.067 0 1 0-7.166-7.166L10.484 6.35a5.067 5.067 0 1 0 7.166 7.166l.207-.207M2 8l3 1m-2 4.5L5 12m-.5-8L6 6"
      />
    </svg>
  );
};
export default Unlink_01;
