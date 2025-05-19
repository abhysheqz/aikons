import React from "react";
const Mortarboard_02: React.FC<
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
        d="M7.001 10.5 7 16l5 2.5 4.999-2.5v-5.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.974 8.995-8.035 4.025-9.933-5.01a.01.01 0 0 1 0-.019L11.939 3l10.057 4.992a.01.01 0 0 1 0 .018zm0 0v8.028m0 0-1.989 3.963a.01.01 0 0 0 .01.015h3.892a.01.01 0 0 0 .009-.015z"
      />
    </svg>
  );
};
export default Mortarboard_02;
