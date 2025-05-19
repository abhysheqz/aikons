import React from "react";
const CursorLoading_01: React.FC<
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
        d="M17.25 6a3.74 3.74 0 0 0 1.5-3V1.25h-7.5V3c0 1.227.589 2.316 1.5 3a3.74 3.74 0 0 0-1.5 3v1.75h7.5V9a3.74 3.74 0 0 0-1.5-3m0-3a2.25 2.25 0 0 1-4.5 0v-.25h4.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.357 5.451 5.625 1.25l-1.375 19 5.187-3.398 2.79 5.898 3.975-1.957-2.65-5.67 6.198-1.33-1.737-1.543H9.75V9c0-1.116.349-2.15.941-3a5 5 0 0 1-.335-.549"
      />
    </svg>
  );
};
export default CursorLoading_01;
