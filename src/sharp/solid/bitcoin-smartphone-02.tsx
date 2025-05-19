import React from "react";
const BitcoinSmartphone_02: React.FC<
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
        d="M4.25 1.25h15.5v21.5H4.25zm8.5 4v1.333h.813c.976 0 1.687.83 1.687 1.75V9c0 .362-.11.71-.303 1 .193.29.303.638.303 1v.667c0 .92-.71 1.75-1.687 1.75h-.813v1.333h-1.5v-1.333h-2.5v-1.5h.938V8.083H8.75v-1.5h2.5V5.25zm-1.562 2.833V9.25h2.374c.06 0 .188-.066.188-.25v-.667c0-.184-.129-.25-.187-.25zm2.374 2.667h-2.374v1.167h2.374c.06 0 .188-.066.188-.25V11c0-.184-.129-.25-.187-.25M13.01 19H11v2h2.009z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSmartphone_02;
