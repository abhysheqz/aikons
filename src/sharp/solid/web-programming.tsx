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
        d="M3 2.25a.75.75 0 0 0-.75.75v5.25h19.5V3a.75.75 0 0 0-.75-.75zm3 2h2.01v2H6zm4 0h2.01v2H10zM21.75 9.75H2.25V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zm-14 5.5a.75.75 0 0 1 1.31-.5l1.117-1a2.25 2.25 0 0 0-3.927 1.5v1a2.25 2.25 0 0 0 3.927 1.5l.5-.559-1.117-1-.5.559a.75.75 0 0 1-1.31-.5zm6.58-1.165 2 4 1.34-.67-2-4zM12.75 13.5h-1.509V15h1.51zm0 3h-1.509V18h1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebProgramming;
