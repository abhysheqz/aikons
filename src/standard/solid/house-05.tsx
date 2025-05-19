import React from "react";
const House_05: React.FC<
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
        d="M11.643 1.34a.75.75 0 0 1 .767.031l10 6.5a.75.75 0 0 1 .341.629V11a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V8.5a.75.75 0 0 1 .569-.728l9.431-2.358L11.251 2a.75.75 0 0 1 .392-.66M2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 22v-8.95h17.5V22a.75.75 0 0 1-.75.75h-5.998a.75.75 0 0 0 .748-.75v-4A1.75 1.75 0 0 0 13 16.25h-2A1.75 1.75 0 0 0 9.25 18v4a.75.75 0 0 0 .748.75H4a.75.75 0 0 1-.75-.75m6.752.75h3.996a.75.75 0 0 1-.748-.75v-4a.25.25 0 0 0-.25-.25h-2a.25.25 0 0 0-.25.25v4a.75.75 0 0 1-.748.75M6.25 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M17 15.25h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5M5 2a1 1 0 0 1 1 1v4.5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_05;
