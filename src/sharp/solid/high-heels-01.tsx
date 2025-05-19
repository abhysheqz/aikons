import React from "react";
const HighHeels_01: React.FC<
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
        d="M7.33 1.665a.75.75 0 0 1 .853-.392l8 2.003a.75.75 0 0 1 .562.826l-.65 4.913c-.43 2.832-.619 4.741-.4 6.045.106.63.3 1.068.57 1.39.266.317.655.578 1.247.774l4.238 1.241v4.285H11.646L2.42 11.49a.75.75 0 0 1-.17-.476c0-2.09.39-3.51 1.14-4.557.687-.959 1.619-1.52 2.548-2.01zm.25 2.856 7.328 2.035.263-1.988-6.767-1.694zm-3.826 6.228c.022-1.2.193-2.049.452-2.679 1.052.816 1.693 1.663 1.95 2.52.236.786.178 1.676-.32 2.7zM20.252 21.25h-3.498c.015-1.069.604-1.793 1.252-2.319l2.246.658z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HighHeels_01;
