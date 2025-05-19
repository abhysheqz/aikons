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
        fillRule="evenodd"
        d="M8.75 13a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 .75.75v1a4.75 4.75 0 0 1-4.75 4.75h-4A4.75 4.75 0 0 1 8.75 14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.53 9.969 2.5 2.5-1.061 1.06-2.5-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.338 5.838a2.006 2.006 0 0 1 2.837 0l2.487 2.487a2.006 2.006 0 0 1-2.837 2.837L2.338 8.675a2.006 2.006 0 0 1 0-2.837"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pan_02;
