import React from "react";
const ComingSoon_01: React.FC<
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
        d="M1.25 16a.75.75 0 0 1 .75-.75h3.75v1.5h-3v1H5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75H1.25v-1.5h3v-1H2a.75.75 0 0 1-.75-.75zM12.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zm1.5.75v3.5h1.5v-3.5zM6.75 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zm1.5.75v3.5h1.5v-3.5zM17.75 15.25h1.713l1.787 3.573V15.25h1.5v6.5h-1.713l-1.787-3.573v3.573h-1.5zM12 13.75a5.75 5.75 0 1 1 0-11.5 5.75 5.75 0 0 1 0 11.5m.75-6.29V4.75h-1.5v3.79l2.724.909.475-1.423z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComingSoon_01;
