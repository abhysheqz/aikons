import React from "react";
const CircleLockAdd_02: React.FC<
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
        d="M16.5 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M15.75 16v1.25H14.5v1.5h1.25V20h1.5v-1.25h1.25v-1.5h-1.25V16zM5 6.75a5.5 5.5 0 1 1 11 0v3h-2v-3a3.5 3.5 0 1 0-7 0v3H5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 7.25a7.75 7.75 0 1 0 1.723 15.308 6.25 6.25 0 0 1 5.357-10.715A7.75 7.75 0 0 0 10.5 7.25"
      />
    </svg>
  );
};
export default CircleLockAdd_02;
