import React from "react";
const Factory: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3 10h6.003M13.005 2H6.002v2M16.007 2h1.001M11.004 5h6.003"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8.977 13.516 6.079-2.465v2.489l5.933-2.489v10.936a.01.01 0 0 1-.01.01H8.977m0-8.481v8.481m0-8.481V6.989a.01.01 0 0 0-.01-.01H3.002a.01.01 0 0 0-.01.01v14.998q.001.01.01.01h5.975"
      />
    </svg>
  );
};
export default Factory;
