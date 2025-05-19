import React from "react";
const ArrowMoveRightDown: React.FC<
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
        d="M20 5h-.933c-6.16 0-9.24 0-11.153 2.12S6 12.656 6 19.48V21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 2c.607.59 3 2.16 3 3s-2.393 2.41-3 3M9 19c-.59.607-2.16 3-3 3s-2.41-2.393-3-3"
      />
    </svg>
  );
};
export default ArrowMoveRightDown;
