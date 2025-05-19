import React from "react";
const CircleLockRemove_01: React.FC<
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
        d="M5 6.75a5.5 5.5 0 1 1 11 0v3h-2v-3a3.5 3.5 0 1 0-7 0v3H5zM15.629 18.5l-2.793-2.793 1.414-1.414 2.793 2.793 2.793-2.793 1.414 1.414-2.793 2.793 2.793 2.793-1.414 1.414-2.793-2.793-2.793 2.793-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 7.25a7.75 7.75 0 1 0 1.522 15.35l-1.307-1.307 2.793-2.793-2.793-2.793 3.535-3.535 2.793 2.793 1.121-1.121A7.75 7.75 0 0 0 10.5 7.25"
      />
    </svg>
  );
};
export default CircleLockRemove_01;
