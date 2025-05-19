import React from "react";
const ShutDown: React.FC<
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
        d="M13 3a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zM8.329 4.888a1 1 0 0 0-.92-1.776A10 10 0 0 0 2 11.998c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-5.41-8.886 1 1 0 0 0-.919 1.776 8 8 0 1 1-7.343 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShutDown;
