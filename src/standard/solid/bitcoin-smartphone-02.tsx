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
        d="M4 3.75A2.75 2.75 0 0 1 6.75 1h10a2.75 2.75 0 0 1 2.75 2.75v16a2.75 2.75 0 0 1-2.75 2.75h-10A2.75 2.75 0 0 1 4 19.75zM11.75 5a.75.75 0 0 1 .75.75V6h.25a2.25 2.25 0 0 1 1.677 3.75 2.25 2.25 0 0 1-1.677 3.75h-.25v.25a.75.75 0 0 1-1.5 0v-.25H9.25a.75.75 0 0 1 0-1.5h.25V7.5h-.25a.75.75 0 0 1 0-1.5H11v-.25a.75.75 0 0 1 .75-.75M11 7.5V9h1.75a.75.75 0 0 0 0-1.5zm1.75 3H11V12h1.75a.75.75 0 0 0 0-1.5m-1 7.25a1 1 0 1 0 0 2 1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSmartphone_02;
