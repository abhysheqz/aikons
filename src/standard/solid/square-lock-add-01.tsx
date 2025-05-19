import React from "react";
const SquareLockAdd_01: React.FC<
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
        d="M5.5 6.5a5.5 5.5 0 1 1 11 0V9a1 1 0 1 1-2 0V6.5a3.5 3.5 0 1 0-7 0V9a1 1 0 1 1-2 0zM17.5 14a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-2.5V22a1 1 0 1 1-2 0v-2.5H14a1 1 0 1 1 0-2h2.5V15a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5 8.25A2.75 2.75 0 0 0 2.25 11v9A2.75 2.75 0 0 0 5 22.75h10.115A2.5 2.5 0 0 1 15 22v-1h-1a2.5 2.5 0 0 1 0-5h1v-1a2.5 2.5 0 0 1 4.75-1.091V11A2.75 2.75 0 0 0 17 8.25z"
      />
    </svg>
  );
};
export default SquareLockAdd_01;
