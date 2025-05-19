import React from "react";
const Pan_03: React.FC<
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
        d="M8.25 11a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v1c0 2.678-2.334 4.75-5.083 4.75h-4.334c-2.75 0-5.083-2.071-5.083-4.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.03 7.969 2.5 2.5-1.061 1.06-2.5-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.838 3.838a2.006 2.006 0 0 1 2.837 0l2.487 2.487a2.006 2.006 0 1 1-2.837 2.837L1.838 6.675a2.006 2.006 0 0 1 0-2.837M11.5 17.75a.75.75 0 0 1 .75.75v.75h2.5v-.75a.75.75 0 0 1 1.5 0v.75h2.5v-.75a.75.75 0 0 1 1.5 0v.75H22a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h1.75v-.75a.75.75 0 0 1 .75-.75M11.5 3.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M15.5 3.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75M19.5 3.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pan_03;
