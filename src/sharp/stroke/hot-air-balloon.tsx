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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 8.933C20 14 14.461 18 12 18s-8-4-8-9.067C4 5.104 7.582 2 12 2s8 3.104 8 6.933Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 8.933C15 14 12.923 18 12 18s-3-4-3-9.067C9 5.104 10.343 2 12 2s3 3.104 3 6.933ZM15 18H9v4h6z"
      />
    </svg>
  );
};
export default HotAirBalloon;
