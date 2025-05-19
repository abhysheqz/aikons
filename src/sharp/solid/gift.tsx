import React from "react";
const Gift: React.FC<
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
        d="M5.25 3.786c0-1.4 1.135-2.536 2.536-2.536h.357c1.614 0 3.034.83 3.857 2.087a4.6 4.6 0 0 1 3.857-2.087h.357c1.4 0 2.536 1.135 2.536 2.536 0 .931-.321 1.787-.859 2.464H21a.75.75 0 0 1 .75.75v3.75H2.25V7A.75.75 0 0 1 3 6.25h3.109a3.95 3.95 0 0 1-.859-2.464m6 2.464v-.393A3.107 3.107 0 0 0 8.143 2.75h-.357c-.572 0-1.036.464-1.036 1.036A2.464 2.464 0 0 0 9.214 6.25zm3.536 0a2.464 2.464 0 0 0 2.464-2.464c0-.572-.464-1.036-1.036-1.036h-.357a3.107 3.107 0 0 0-3.107 3.107v.393z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 12.25h-8V22c0 .414.336.75.75.75h7.25zM12.75 22.75H20a.75.75 0 0 0 .75-.75v-9.75h-8z"
      />
    </svg>
  );
};
export default Gift;
