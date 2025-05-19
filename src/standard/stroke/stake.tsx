import React from "react";
const Stake: React.FC<
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
        strokeWidth={1.5}
        d="M8 6c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2ZM15.5 9a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 13.75-3-1.75-3 1.75m6 0-3 1.75m3-1.75v3.5l-3 1.75m-3-5.25 3 1.75m-3-1.75v3.5l3 1.75m0-3.5V19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.774 10.117C4.46 10.117 2 9.19 2 8.197m12.004-1.663V4M2 4v8.127c0 .806 1.761 1.644 4.198 1.873"
      />
    </svg>
  );
};
export default Stake;
