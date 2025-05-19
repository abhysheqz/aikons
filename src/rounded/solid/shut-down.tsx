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
        d="M8.757 3.54a1 1 0 0 1-.428 1.348 8 8 0 1 0 7.343 0 1 1 0 0 1 .919-1.776A10 10 0 0 1 22 11.998c0 5.523-4.477 10-10 10s-10-4.477-10-10a10 10 0 0 1 5.41-8.886 1 1 0 0 1 1.347.429"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShutDown;
