import React from "react";
const PathfinderMinusBack: React.FC<
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
        d="M21.998 8.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-7.75h6v-6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.998 1.25h3v1.5h-3zM1.248 2a.75.75 0 0 1 .75-.75h3v1.5h-2.25V5h-1.5zm13 .75h-2.25v-1.5h3a.75.75 0 0 1 .75.75v4h-1.5zm-13 7.25V7h1.5v3zm0 5v-3h1.5v2.25h3.25v1.5h-4a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PathfinderMinusBack;
