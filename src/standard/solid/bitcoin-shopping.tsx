import React from "react";
const BitcoinShopping: React.FC<
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
        d="M8.445 6.5a3.5 3.5 0 1 1 7 0v.75h-7zm-2 .75V6.5a5.5 5.5 0 1 1 11 0v.75h.694a2.75 2.75 0 0 1 2.722 3.139l-1.429 10a2.75 2.75 0 0 1-2.722 2.361H7.18a2.75 2.75 0 0 1-2.723-2.361l-1.429-10A2.75 2.75 0 0 1 5.751 7.25zm5.5 3a.75.75 0 0 1 .75.75v.25h.25A2.25 2.25 0 0 1 14.622 15a2.25 2.25 0 0 1-1.677 3.75h-.25V19a.75.75 0 0 1-1.5 0v-.25h-1.75a.75.75 0 0 1 0-1.5h.25v-4.5h-.25a.75.75 0 0 1 0-1.5h1.75V11a.75.75 0 0 1 .75-.75m-.75 2.5v1.5h1.75a.75.75 0 0 0 0-1.5zm1.75 3h-1.75v1.5h1.75a.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinShopping;
