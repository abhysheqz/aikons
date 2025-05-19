import React from "react";
const Structure_02: React.FC<
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
        d="M7.25 2A.75.75 0 0 1 8 1.25h8a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H8A.75.75 0 0 1 7.25 7zM1.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM17.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 6h-3V4h4a1 1 0 0 1 1 1v6h-2zM5 6h3V4H4a1 1 0 0 0-1 1v6h2zm6 8V7h2v7zm0 8v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.75 16.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
    </svg>
  );
};
export default Structure_02;
