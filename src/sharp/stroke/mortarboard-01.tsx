import React from "react";
const Mortarboard_01: React.FC<
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
        d="m5.984 10.031.997 7.032c2.681 2.679 7.282 2.679 9.964 0l.996-7.032"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.964 9.025-8.034 4.024-9.934-5.01a.01.01 0 0 1 0-.018l9.934-4.993 10.057 4.993a.01.01 0 0 1 0 .018zm0 0v8.027m0 0-1.989 3.964a.01.01 0 0 0 .01.014h3.892a.01.01 0 0 0 .009-.014z"
      />
    </svg>
  );
};
export default Mortarboard_01;
