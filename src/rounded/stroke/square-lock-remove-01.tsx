import React from "react";
const SquareLockRemove_01: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14 22 3.5-3.5m0 0L21 15m-3.5 3.5L14 15m3.5 3.5L21 22M11 22c-1.614 0-2.931-.034-4.374-.1a3.56 3.56 0 0 1-3.353-3.055C3.123 17.755 3 16.638 3 15.5s.123-2.255.273-3.345A3.56 3.56 0 0 1 6.626 9.1C8.069 9.034 9.535 9 11.149 9s3.08.034 4.523.1A3.56 3.56 0 0 1 19 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9"
      />
    </svg>
  );
};
export default SquareLockRemove_01;
