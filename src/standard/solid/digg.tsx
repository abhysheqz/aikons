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
        d="M9 4.25a.75.75 0 0 1 .75.75v1.016a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 9 4.25m0 4.062a.75.75 0 0 1 .75.75V16a.75.75 0 0 1-1.5 0V9.062a.75.75 0 0 1 .75-.75M6 4.25a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 2 8.25h3.25V5A.75.75 0 0 1 6 4.25m-.75 5.5h-2.5v5.5h2.5zM10.75 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75l.004 10a.75.75 0 0 1-.75.75H11.5a.75.75 0 0 1 0-1.5h3.254v-1.5H11.5a.75.75 0 0 1-.75-.75zm4.003 6.25-.002-5.5h-2.5v5.5zM17.25 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h3.25v-1.5H18a.75.75 0 0 1-.75-.75zm4 6.25v-5.5h-2.5v5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Digg;
