import React from "react";
const Pan_02: React.FC<
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
        d="M8.75 13.556c0-.557.387-1.306 1.194-1.306h11.112c.807 0 1.194.75 1.194 1.306 0 2.704-1.78 5.194-4.306 5.194h-4.888c-2.526 0-4.306-2.49-4.306-5.194"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.405 9.903a.75.75 0 0 1 1.06 0l3.31 3.31a.75.75 0 1 1-1.06 1.06l-3.31-3.31a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.338 5.838a2.006 2.006 0 0 1 2.837 0l2.487 2.487a2.006 2.006 0 0 1-2.837 2.837L2.338 8.675a2.006 2.006 0 0 1 0-2.837"
      />
    </svg>
  );
};
export default Pan_02;
