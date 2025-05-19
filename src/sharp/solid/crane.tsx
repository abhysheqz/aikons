import React from "react";
const Crane: React.FC<
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
        d="M5.253 3.25h4.996a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v5a.75.75 0 0 1-.75.75h-9A.75.75 0 0 1 4.5 13l.004-9a.75.75 0 0 1 .75-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 15.25a3.75 3.75 0 1 0 0 7.5h10a3.75 3.75 0 0 0 0-7.5zm1 2.5a1.25 1.25 0 1 0 0 2.5h.008a1.25 1.25 0 1 0 0-2.5zm3.995 0a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm3.995 0a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 0 0 0-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m13.279 7.03 4.28-4.28h1.94v1.264h1.5V2a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.531.22l-4.5 4.5zM19.5 5v1.5H21V5zM19.5 7.5V9H21V7.5zM21 10v1.38q.163.051.336.137c.277.138.576.357.805.7.231.347.36.777.36 1.283 0 1.263-1.048 2.25-2.294 2.25-.986 0-1.84-.614-2.161-1.494l1.41-.512a.79.79 0 0 0 .75.506c.46 0 .795-.356.795-.75 0-.244-.059-.377-.109-.451a.57.57 0 0 0-.227-.19 1.1 1.1 0 0 0-.42-.109H19.5V10z"
      />
    </svg>
  );
};
export default Crane;
