import React from "react";
const Mp_01: React.FC<
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
        d="m3.251 1.25-.001 12.5h17.5V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236zM4.587 15.25H3.25v7.5h1.5v-4.357l1.253 2.05 1.247-2.058v4.365h1.5v-7.5H7.397l-1.4 2.308zm7.663 0h-2.5v7.5h1.5v-2.5h1a2.5 2.5 0 0 0 0-5m0 3.5h-1v-2h1a1 1 0 1 1 0 2m7-.5h-2v-3h-1.5v4.5h3.5v2.5h1.5v-7h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mp_01;
