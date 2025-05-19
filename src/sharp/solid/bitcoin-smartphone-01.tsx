import React from "react";
const BitcoinSmartphone_01: React.FC<
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
        d="M18.5 7.25v1.333h.813c.976 0 1.687.83 1.687 1.75V11c0 .362-.11.71-.303 1 .193.29.303.638.303 1v.667c0 .92-.71 1.75-1.687 1.75H18.5v1.333H17v-1.333h-2.5v-1.5h.938v-3.834H14.5v-1.5H17V7.25zm-1.562 2.833v1.167h2.375c.058 0 .187-.066.187-.25v-.667c0-.184-.129-.25-.187-.25zm2.375 2.667h-2.375v1.167h2.375c.058 0 .187-.066.187-.25V13c0-.184-.129-.25-.187-.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 1.25H3v21.5h15.5v-4.5h-3v-1.333H13V7.083h2.5V5.75h3zM9.75 19h2.009v2H9.75zM9.5 4.75h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSmartphone_01;
