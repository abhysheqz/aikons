import React from "react";
const Algorithm: React.FC<
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
        d="M7.75 3.75h8.5v8.5h-8.5zM17.25 18.25h4.5v4.5h-4.5zM2.25 18.25h4.5v4.5h-4.5zM9.75 18.25h4.5v4.5h-4.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.75 4.5V2h1.5v2.5zm3 0V2h1.5v2.5zM6 5.75h2.5v1.5H6zm9.5 0H18v1.5h-2.5zm-9.5 3h2.5v1.5H6zm9.5 0H18v1.5h-2.5zM12 10.75a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 14.25h16.5V19h-1.5v-3.25H5.25V19h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Algorithm;
