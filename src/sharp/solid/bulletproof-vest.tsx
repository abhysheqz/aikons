import React from "react";
const BulletproofVest: React.FC<
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
      <path fill="currentColor" d="M9.75 17.25v-4.5h4.5v4.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 4.679A3.25 3.25 0 0 0 19.887 7.5l1.863 1.065v3.685H18.5v1.5h3.25v2.5H18.5v1.5h3.25v5H2.25v-5H5.5v-1.5H2.25v-2.5H5.5v-1.5H2.25V8.565L4.112 7.5A3.25 3.25 0 0 0 5.75 4.679V1.25h12.5zM9.094 2.75a3.001 3.001 0 0 0 5.81 0zm6.656 8.5h-7.5v7.5h7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BulletproofVest;
