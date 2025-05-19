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
        d="M13 11V2h-2v9zM8.329 4.888l.888-.46-.92-1.776-.888.46A10 10 0 0 0 2 11.998c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-5.41-8.886l-.888-.46-.919 1.777.888.46a8 8 0 1 1-7.343 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShutDown;
