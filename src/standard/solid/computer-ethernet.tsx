import React from "react";
const ComputerEthernet: React.FC<
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
        d="M10.5 16.75a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2a.5.5 0 0 0 .5-.5zM19.5 8.75a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0v-11a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.5 2.25c-.69 0-1.25.56-1.25 1.25v1.25h6.5V3.5c0-.69-.56-1.25-1.25-1.25zM22.75 6.25h-6.5V8A2.75 2.75 0 0 0 19 10.75h1A2.75 2.75 0 0 0 22.75 8z"
      />
      <path
        fill="currentColor"
        d="M15.05 2.25c-.192.375-.3.8-.3 1.25V8c0 1.625.911 3.035 2.25 3.75v6H4A2.75 2.75 0 0 1 1.25 15V5A2.75 2.75 0 0 1 4 2.25z"
      />
    </svg>
  );
};
export default ComputerEthernet;
