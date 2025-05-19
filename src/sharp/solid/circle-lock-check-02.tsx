import React from "react";
const CircleLockCheck_02: React.FC<
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
        d="M5 6.75a5.5 5.5 0 1 1 11 0v3h-2v-3a3.5 3.5 0 1 0-7 0v3H5zM16.5 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m-.365 7.139 2.933-3.4-1.136-.98-1.956 2.268-.988-.847-.976 1.14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 7.25a7.75 7.75 0 1 0 1.723 15.308 6.25 6.25 0 0 1 5.357-10.715A7.75 7.75 0 0 0 10.5 7.25"
      />
    </svg>
  );
};
export default CircleLockCheck_02;
