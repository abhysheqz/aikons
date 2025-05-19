import React from "react";
const Tap_01: React.FC<
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
        d="M8.743 6.501a2.251 2.251 0 0 1 4.502 0v4.27c2.983.178 4.728 1.396 5.636 2.34.69.72.869 1.673.869 2.484a5.4 5.4 0 0 1-.906 2.99l-1.095 1.642V22a.75.75 0 0 1-.75.75H9.493a.75.75 0 0 1-.75-.75v-1.71l-3.875-4.26a2.377 2.377 0 0 1 3.437-3.278l.444.442z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 2.75A3.25 3.25 0 0 0 7.75 6a.75.75 0 0 1-1.5 0 4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 11 2.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tap_01;
