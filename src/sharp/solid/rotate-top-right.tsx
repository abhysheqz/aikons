import React from "react";
const RotateTopRight: React.FC<
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
        d="M6.75 9a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.336 1.25 3.12 3.293a1 1 0 0 1-.706 1.707h-9v8h-2v-9a1 1 0 0 1 1-1h7.586L9.92 2.664z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateTopRight;
