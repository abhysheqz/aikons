import React from "react";
const Estimate_02: React.FC<
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
        d="M4.75 1.5A2.75 2.75 0 0 0 2 4.25v12A2.75 2.75 0 0 0 4.75 19h7.207a6.05 6.05 0 0 1 6.543-7.754V4.25a2.75 2.75 0 0 0-2.75-2.75zM5 6.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 5 6.25m.75 3.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm3.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM5 14.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 12.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.75 3.25a.75.75 0 0 0-1.5 0v1.5c0 .284.16.544.415.67l1 .5a.75.75 0 1 0 .67-1.34l-.585-.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Estimate_02;
