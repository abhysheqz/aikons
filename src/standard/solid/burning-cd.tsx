import React from "react";
const BurningCd: React.FC<
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
      <path fill="currentColor" d="M15 8.25a3.75 3.75 0 1 1 0 7.5z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.332 5a1 1 0 0 1 1-1 8 8 0 1 1 0 16 1 1 0 1 1 0-2 6 6 0 0 0 0-12 1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1.25A3.75 3.75 0 0 0 2.25 5v14A3.75 3.75 0 0 0 6 22.75h6A3.75 3.75 0 0 0 15.75 19V5A3.75 3.75 0 0 0 12 1.25zm5 12.25a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BurningCd;
