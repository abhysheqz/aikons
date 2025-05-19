import React from "react";
const BitcoinSafe: React.FC<
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
        d="M3.75 1A2.75 2.75 0 0 0 1 3.75v14a2.75 2.75 0 0 0 2.75 2.75H5v1.25a.75.75 0 0 0 1.5 0V20.5H17v1.25a.75.75 0 0 0 1.5 0V20.5h1.25a2.75 2.75 0 0 0 2.75-2.75v-14A2.75 2.75 0 0 0 19.75 1zm3.916 5.374a.75.75 0 0 0-.832-1.248l-1.5 1A.75.75 0 0 0 5 6.75v6c0 .199.079.39.22.53l1.5 1.5a.75.75 0 1 0 1.06-1.06L6.5 12.44V7.15zM15.25 5a.75.75 0 0 1 .75.75V6h.25a2.25 2.25 0 0 1 1.677 3.75 2.25 2.25 0 0 1-1.677 3.75H16v.25a.75.75 0 0 1-1.5 0v-.25h-1.75a.75.75 0 0 1 0-1.5H13V7.5h-.25a.75.75 0 0 1 0-1.5h1.75v-.25a.75.75 0 0 1 .75-.75m-.75 2.5V9h1.75a.75.75 0 0 0 0-1.5zm1.75 3H14.5V12h1.75a.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSafe;
