import React from "react";
const SquareLockMinus_01: React.FC<
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
        d="M5.5 6.5a5.5 5.5 0 1 1 11 0V9a1 1 0 1 1-2 0V6.5a3.5 3.5 0 1 0-7 0V9a1 1 0 1 1-2 0zM13 18.5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 8.25A2.75 2.75 0 0 0 2.25 11v9A2.75 2.75 0 0 0 5 22.75h12A2.75 2.75 0 0 0 19.562 21H14a2.5 2.5 0 0 1 0-5h5.75v-5A2.75 2.75 0 0 0 17 8.25z"
      />
    </svg>
  );
};
export default SquareLockMinus_01;
