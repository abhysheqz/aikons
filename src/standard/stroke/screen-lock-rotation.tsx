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
        d="M15.5 6H15a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-.5m-4 0V4.5a2 2 0 1 1 4 0V6m-4 0h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 14.355-3.899 4.063a1.854 1.854 0 0 1-2.699 0L6.56 11.287a2.05 2.05 0 0 1 0-2.813l3.899-4.062A1.31 1.31 0 0 1 12 4.14M3 12.5s0 8.56 8.349 8.984c.288.014.432.022.495-.075.063-.096-.003-.226-.133-.488L11 19.5"
      />
    </svg>
  );
};
export default ScreenLockRotation;
