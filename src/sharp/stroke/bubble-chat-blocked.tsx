import React from "react";
const BubbleChatBlocked: React.FC<
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
        strokeWidth={1.5}
        d="m2 2 20 20M6.653 3.475A10.6 10.6 0 0 1 12.003 2C17.522 2 22 6.255 22 11.504c0 2.03-.692 3.936-1.831 5.48M4.859 4.84c-1.735 1.71-2.855 4.1-2.855 6.664 0 2.678 1.162 5.008 3.004 6.788l-1 3.695A.01.01 0 0 0 4.02 22l3.976-1.784c1.226.51 2.581.793 4.005.793 2.534 0 4.88-.924 6.643-2.401"
      />
    </svg>
  );
};
export default BubbleChatBlocked;
