import React from "react";
const ShieldBlockchain: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 7 4 2.25v4.5L12 16l-4-2.25v-4.5zM16 9.25l-4 2.25M8 9.25l4 2.25m0 0V16"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.43 4.934c3.14.226 5.163-2.933 8.597-2.933 3.382-.067 5.036 2.976 8.504 2.976 1.858 9.407-2.008 15.316-8.476 17.023-5.996-1.417-10.5-7.387-8.624-17.066Z"
      />
    </svg>
  );
};
export default ShieldBlockchain;
