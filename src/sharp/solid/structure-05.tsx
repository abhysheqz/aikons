import React from "react";
const Structure_05: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H2A.75.75 0 0 1 1.25 8zM14.25 6a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75zM12.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.317 4.27a1 1 0 0 1 1.054-.198l5 2-.742 1.856-3.019-1.207 2.913 8.97-1.903.618-3.571-11a1 1 0 0 1 .268-1.04"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Structure_05;
