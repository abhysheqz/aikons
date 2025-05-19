import React from "react";
const Beach_02: React.FC<
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
        d="M21 21c-2.199-1.227-5.416-2-9-2s-6.801.773-9 2M15 11.497c0-4.026-3-5.55-5.5-5.046-1-2.016-3-3.509-6.5-1.497"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3.5 9.483c1.5-3.032 4.333-3.368 6-3.032 1 .504 2 2.027 2 5.549"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.5 6.5c-1 1.833-3 7-3 13"
      />
      <circle
        cx={19}
        cy={5}
        r={2}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Beach_02;
