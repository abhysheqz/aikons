import React from "react";
const CircleLockCheck_01: React.FC<
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
        d="m21.75 14.707-6.707 6.707-2.707-2.707 1.414-1.414 1.293 1.293 5.293-5.293zM4.5 6.75a5.5 5.5 0 0 1 11 0v3h-2v-3a3.5 3.5 0 1 0-7 0v3h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 7.25a7.75 7.75 0 1 0 3.45 14.692l-3.235-3.235 3.535-3.535 1.293 1.293 2.621-2.621A7.75 7.75 0 0 0 10 7.25"
      />
    </svg>
  );
};
export default CircleLockCheck_01;
