import React from "react";
const Door: React.FC<
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
        d="M21 22.75H3v-2h18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 2A.75.75 0 0 1 5 1.25h14a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75zm12.5 2.25h-9.5v9.5h9.5zm-8 4v-2.5h2.5v2.5zm0 1.5h2.5v2.5h-2.5zm6.5 2.5h-2.5v-2.5h2.5zm0-4h-2.5v-2.5h2.5zm-8.001 9.5h1.509v-1.5h-1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Door;
