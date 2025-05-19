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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.25 21.999c-3.936.097-7-3.193-7-7 0-3.866 3.119-7 6.966-7a6.96 6.96 0 0 1 6.034 3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.75 9.499v-3a4.5 4.5 0 1 0-9 0v3M12.75 16.999h7"
      />
    </svg>
  );
};
export default CircleLockMinus_01;
