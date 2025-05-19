import React from "react";
const ScreenLockRotation: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.2 14-6 6L5 9.8 11.8 3l1.327 1.327"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 6V4.5a2 2 0 1 0-4 0V6m-1.5 0h7v5.5h-7z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 12.5s0 8.56 8.349 8.984c.288.014.432.022.495-.075.063-.096-.003-.226-.133-.488L10.5 19.5"
      />
    </svg>
  );
};
export default ScreenLockRotation;
