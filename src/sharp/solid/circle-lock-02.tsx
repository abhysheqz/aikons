import React from "react";
const CircleLock_02: React.FC<
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
        d="M6.5 6.75a5.5 5.5 0 1 1 11 0v3h-2v-3a3.5 3.5 0 1 0-7 0v3h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 15a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0M13 16.5v-3h-2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleLock_02;
