import React from "react";
const Navigation_03: React.FC<
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
        d="M19.062 2.773c1.32-.378 2.54.843 2.163 2.163l-4.072 14.257c-.468 1.64-2.764 1.71-3.333.103l-2.342-6.624a.25.25 0 0 0-.152-.152l-6.624-2.341c-1.607-.568-1.536-2.865.102-3.333z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigation_03;
