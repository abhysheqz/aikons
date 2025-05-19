import React from "react";
const Api: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13a3.75 3.75 0 0 0-3.75-3.75zM7 8.25a.75.75 0 0 0-.727.568l-1.5 6a.75.75 0 0 0 1.455.364l.358-1.432h2.207l.496 1.487a.75.75 0 0 0 1.423-.474l-2-6A.75.75 0 0 0 8 8.25zm1.293 4H6.96l.57-2.284zm4.207-4a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-2.25h1.25a2.25 2.25 0 0 0 0-4.5zm2 3h-1.25v-1.5h1.25a.75.75 0 0 1 0 1.5M19.25 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Api;
