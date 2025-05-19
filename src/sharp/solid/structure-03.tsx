import React from "react";
const Structure_03: React.FC<
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
        d="M8.75 16.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M7.25 2A.75.75 0 0 1 8 1.25h8a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H8A.75.75 0 0 1 7.25 7zM1.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM17.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 10V7h2v3h7a1 1 0 0 1 1 1v3h-2v-2h-6v2h-2v-2H5.001L5 14H3l.002-3a1 1 0 0 1 1-1zm0 12v-3h2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Structure_03;
