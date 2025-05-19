import React from "react";
const FlipTop: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.667 22h4.666M3.015 16.5c-.017-.5-.018-1-.016-1.5m17.986 1.5c.017-.5.018-1 .017-1.5M3.537 19.255a5 5 0 0 0 2.226 2.217m12.417.028a5 5 0 0 0 2.283-2.245"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.505 12c-1.86 0-2.498-.54-2.498-2.5 0-2.532-.25-5.454 2.248-6.897C6.3 2 7.7 2 10.501 2H13.5c2.801 0 4.202 0 5.246.603 2.498 1.443 2.248 4.365 2.248 6.897 0 1.862-.54 2.5-2.498 2.5z"
      />
    </svg>
  );
};
export default FlipTop;
