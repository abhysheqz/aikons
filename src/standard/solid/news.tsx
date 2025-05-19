import React from "react";
const News: React.FC<
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
        d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h15a1 1 0 1 0 0-2h-1V5a3 3 0 0 0-3-3zm2 5.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0 5.5h7a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0 0 1.5m0 2.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 8a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v9a3 3 0 1 1-6 0zm2 1v10a1 1 0 1 0 2 0v-9a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default News;
