import React from "react";
const CursorDisabled_01: React.FC<
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
        d="M16.229 3.428a2.851 2.851 0 0 0-3.801 3.8zm1.343 1.343-3.8 3.801a2.851 2.851 0 0 0 3.8-3.8m-5.93-2.13a4.75 4.75 0 1 1 6.717 6.718 4.75 4.75 0 0 1-6.718-6.718"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9 4.247 5.625 1.25l-1.375 19 5.187-3.398 2.79 5.898 3.975-1.957-2.65-5.67 6.198-1.33-2.299-2.042A6.252 6.252 0 0 1 9 4.247"
      />
    </svg>
  );
};
export default CursorDisabled_01;
