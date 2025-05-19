import React from "react";
const UniversalAccess: React.FC<
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
        d="M12 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 7c-1.546 1.237-3.664 2-6 2s-4.454-.763-6-2M13.5 14.5l1 6m-1-6V9m0 5.5h-3m-1 6 1-6m0 0V9"
      />
    </svg>
  );
};
export default UniversalAccess;
