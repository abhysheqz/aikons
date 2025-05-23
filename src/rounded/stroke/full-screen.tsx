import React from "react";
const FullScreen: React.FC<
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
        d="M15.5 21c1.396 0 2.093 0 2.661-.172a4 4 0 0 0 2.667-2.667C21 17.593 21 16.896 21 15.5m0-7c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667C17.593 3 16.896 3 15.5 3m-7 18c-1.396 0-2.093 0-2.661-.172a4 4 0 0 1-2.667-2.667C3 17.593 3 16.896 3 15.5m0-7c0-1.396 0-2.093.172-2.661A4 4 0 0 1 5.84 3.172C6.407 3 7.104 3 8.5 3"
      />
    </svg>
  );
};
export default FullScreen;
