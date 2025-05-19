import React from "react";
const TouchLocked_03: React.FC<
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
        d="M12 21H9.07a2 2 0 0 1-1.664-.89L3.39 14.088a1.74 1.74 0 0 1 2.482-2.417L8.005 13.5V3.75a1.75 1.75 0 1 1 3.5 0V10H16.5c.889 0 1.45.386 2 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 17v-1.5a1.5 1.5 0 0 0-3 0V17M15 17h6v5h-6z"
      />
    </svg>
  );
};
export default TouchLocked_03;
