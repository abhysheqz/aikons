import React from "react";
const WebProgramming: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v2.75h20.5V5.5a3.75 3.75 0 0 0-3.75-3.75zm16.75 8H1.75v8.75a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75zM5.5 5a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H6.5a1 1 0 0 1-1-1m3.991 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1m3.001 7.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm2.672-3.17a.75.75 0 0 0-.335 1.005l2 4a.75.75 0 0 0 1.342-.67l-2-4a.75.75 0 0 0-1.007-.336m-7.25-.08a2.164 2.164 0 0 0-2.164 2.164v1.172a2.164 2.164 0 0 0 3.695 1.53l.085-.086a.75.75 0 1 0-1.06-1.06l-.086.085a.664.664 0 0 1-1.134-.47v-1.17a.664.664 0 0 1 1.134-.47l.086.085a.75.75 0 0 0 1.06-1.06l-.085-.086a2.16 2.16 0 0 0-1.53-.634"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebProgramming;
