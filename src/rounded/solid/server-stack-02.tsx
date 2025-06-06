import React from "react";
const ServerStack_02: React.FC<
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
        d="M5.427 10.25h13.146c.393 0 .696 0 .963.053a2.75 2.75 0 0 1 2.161 2.16c.053.268.053.57.053.964 0 .392 0 .842-.053 1.11a2.75 2.75 0 0 1-2.16 2.16c-.268.053-.571.053-.964.053H5.427c-.393 0-.696 0-.964-.053a2.75 2.75 0 0 1-2.16-2.16c-.053-.268-.053-.571-.053-.964s0-.842.053-1.11a2.75 2.75 0 0 1 2.16-2.16c.268-.053.571-.053.964-.053M5.25 13.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 12.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5zM12 18.25a1 1 0 0 1 1 1v.5h6a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h6v-.5a1 1 0 0 1 1-1M5.427 2.25h13.146c.393 0 .696 0 .963.053a2.75 2.75 0 0 1 2.161 2.16c.053.268.053.571.053.964 0 .392 0 .842-.053 1.11a2.75 2.75 0 0 1-2.16 2.16c-.268.053-.571.053-.964.053H5.427c-.393 0-.696 0-.964-.053a2.75 2.75 0 0 1-2.16-2.16c-.053-.268-.053-.571-.053-.964 0-.392 0-.842.053-1.11a2.75 2.75 0 0 1 2.16-2.16c.268-.053.571-.053.964-.053M5.25 5.5A.75.75 0 0 1 6 4.75h.01a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 4.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ServerStack_02;
