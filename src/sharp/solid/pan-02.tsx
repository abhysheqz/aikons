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
        d="M22.25 14a4.75 4.75 0 0 1-4.75 4.75h-4A4.75 4.75 0 0 1 8.75 14v-1.75h13.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.707 9.793 2.5 2.5-1.414 1.414-2.5-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.337 5.838a2.006 2.006 0 0 1 2.838 0l2.487 2.487a2.006 2.006 0 0 1-2.837 2.837L2.337 8.675a2.006 2.006 0 0 1 0-2.837"
      />
    </svg>
  );
};
export default Pan_02;
