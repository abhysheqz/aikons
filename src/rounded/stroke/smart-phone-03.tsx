import React from "react";
const SmartPhone_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 6c.014-1.707.11-2.647.73-3.268C6.962 2 8.14 2 10.5 2h3c2.359 0 3.538 0 4.27.732.62.62.715 1.561.73 3.268m0 12c-.015 1.707-.11 2.647-.73 3.268C17.038 22 15.86 22 13.5 22h-3c-2.359 0-3.538 0-4.27-.732-.62-.62-.716-1.561-.73-3.268M19.5 8.5s-1 .346-1 1.313c0 .966 1 1.22 1 2.187s-1 1.221-1 2.188c0 .966 1 1.312 1 1.312M4.5 8.5s1 .346 1 1.313c0 .966-1 1.22-1 2.187s1 1.221 1 2.188c0 .966-1 1.312-1 1.312"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 2h-4l.5 1h3z"
      />
    </svg>
  );
};
export default SmartPhone_03;
