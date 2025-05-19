import React from "react";
const Loading_02: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 .927-.117 1.828-.339 2.687-.353 1.37-1.81 1.909-2.99 1.493-1.167-.41-1.595-1.678-1.348-2.697q.175-.714.177-1.483a6.25 6.25 0 1 0-3.928 5.805c.816-.327 1.853-.309 2.63.341.573.479.86 1.176.82 1.855a2 2 0 0 1-1.15 1.707A10.7 10.7 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12"
      />
    </svg>
  );
};
export default Loading_02;
