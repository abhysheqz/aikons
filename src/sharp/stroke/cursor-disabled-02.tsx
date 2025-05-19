import React from "react";
const CursorDisabled_02: React.FC<
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
        strokeWidth={1.5}
        d="m2 2 16 6.222-7.111 2.667L8.222 18z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.318 20.682a4.5 4.5 0 0 0 6.364-6.364m-6.364 6.364a4.5 4.5 0 0 1 6.364-6.364m-6.364 6.364 6.364-6.364"
      />
    </svg>
  );
};
export default CursorDisabled_02;
