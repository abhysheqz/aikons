import React from "react";
const SwipeLeft_06: React.FC<
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
        d="M3.602 10.977 5.668 9.17v4.33a.45.45 0 0 0 .9 0V2.584a1.336 1.336 0 1 1 2.67 0L9.24 10.5a.45.45 0 0 0 .9 0V7.951s.325-.176.612-.201c.128-.011.25 0 .25 0 .576 0 1.11.177 1.55.478V11.5a.45.45 0 0 0 .9 0V8.75h.55c.813 0 1.543.352 2.046.912V12.5a.45.45 0 1 0 .9 0V9.75H17a2.75 2.75 0 0 1 2.75 2.75v4.097a4.75 4.75 0 0 1-1.04 2.967l-.96 1.2V22a.75.75 0 0 1-.75.75h-10a.75.75 0 0 1-.75-.75v-1.256l-3.243-4.459a3.96 3.96 0 0 1 .594-5.308M17.883 1.076A1 1 0 0 1 18.5 2v1.502H21a1 1 0 1 1 0 2h-2.5v1.503a1 1 0 0 1-1.707.707l-2.5-2.503a1 1 0 0 1 0-1.413l2.5-2.503a1 1 0 0 1 1.09-.217"
      />
    </svg>
  );
};
export default SwipeLeft_06;
