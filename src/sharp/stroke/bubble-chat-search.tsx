import React from "react";
const BubbleChatSearch: React.FC<
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
        d="M20.013 8.023 21.996 10m-.947-4.473a3.527 3.527 0 1 0-7.053 0 3.527 3.527 0 0 0 7.053 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.991 12h.01m3.986 0h.009m-8 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.062 2C6.505 2 2 6.255 2 11.504c0 2.678 1.169 5.008 3.023 6.788l-1.007 3.695A.01.01 0 0 0 4.03 22l4.001-1.784c1.234.51 2.597.793 4.03.793 5.02 0 9.18-3.471 9.939-8.01"
      />
    </svg>
  );
};
export default BubbleChatSearch;
