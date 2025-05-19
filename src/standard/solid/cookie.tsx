import React from "react";
const Cookie: React.FC<
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
        d="M1.25 12c0-5.939 4.825-10.75 10.773-10.75.825 0 1.629.093 2.402.268a.75.75 0 0 1 .534 1 2.746 2.746 0 0 0 1.147 3.334.75.75 0 0 1 .103 1.207c-.264.23-.429.566-.429.941a1.252 1.252 0 0 0 1.887 1.08.75.75 0 0 1 1.126.6 2.755 2.755 0 0 0 3.111 2.547.75.75 0 0 1 .843.816c-.527 5.45-5.128 9.707-10.724 9.707C6.075 22.75 1.25 17.939 1.25 12M10 12a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1M6 9a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm5 9a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m-.47-11.47a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zm6.5 7.44a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0M6.47 15.53a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cookie;
