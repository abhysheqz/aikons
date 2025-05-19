import React from "react";
const Digg: React.FC<
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
        d="M10.75 9a.75.75 0 0 1 .75-.75h4.75v11.5h-5.5v-1.5h4v-1.5H11.5a.75.75 0 0 1-.75-.75zm4 6.25v-5.5h-2.5v5.5zM17.25 9a.75.75 0 0 1 .75-.75h4.75v11.5h-5.5v-1.5h4v-1.5H18a.75.75 0 0 1-.75-.75zm4 6.25v-5.5h-2.5v5.5zM6.75 4.25v12.5H2a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 2 8.25h3.25v-4zm-1.5 5.5h-2.5v5.5h2.5zM9.75 4.25v2.5h-1.5v-2.5zm0 4v8.5h-1.5v-8.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Digg;
