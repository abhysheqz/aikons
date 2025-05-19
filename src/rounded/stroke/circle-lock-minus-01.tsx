import React from "react";
const CircleLockMinus_01: React.FC<
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
        d="M11 22c-3.936.098-7-3.192-7-7 0-3.866 3.119-7 6.966-7A6.96 6.96 0 0 1 17 11.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.5 9.5v-3a4.5 4.5 0 1 0-9 0v3M12 17h8"
      />
    </svg>
  );
};
export default CircleLockMinus_01;
