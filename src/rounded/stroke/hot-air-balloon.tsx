import React from "react";
const HotAirBalloon: React.FC<
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
        d="M20 8.933C20 14 14.461 18 12 18s-8-4-8-9.067C4 5.104 7.582 2 12 2s8 3.104 8 6.933Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 8.933C15 14 12.923 18 12 18s-3-4-3-9.067C9 5.104 10.343 2 12 2s3 3.104 3 6.933Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 20c0-.465 0-.698.051-.888a1.5 1.5 0 0 1 1.06-1.06C10.303 18 10.536 18 11 18h2c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06c.052.191.052.424.052.889s0 .698-.051.888a1.5 1.5 0 0 1-1.06 1.06C13.697 22 13.464 22 13 22h-2c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C9 20.697 9 20.464 9 20Z"
      />
    </svg>
  );
};
export default HotAirBalloon;
