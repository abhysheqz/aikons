import React from "react";
const BitcoinLock: React.FC<
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
        d="M8.25 6.364A3.355 3.355 0 0 1 11.597 3h.306a3.355 3.355 0 0 1 3.347 3.364v1.884h-7zm-2 1.884V6.364C6.25 3.405 8.64 1 11.597 1h.306c2.957 0 5.347 2.405 5.347 5.364v1.884h.5a2.75 2.75 0 0 1 2.75 2.75v9a2.75 2.75 0 0 1-2.75 2.75h-12A2.75 2.75 0 0 1 3 19.998v-9a2.75 2.75 0 0 1 2.75-2.75zm5.5 2.5a.75.75 0 0 1 .75.75v.25h.25a2.25 2.25 0 0 1 1.677 3.75 2.25 2.25 0 0 1-1.677 3.75h-.25v.25a.75.75 0 1 1-1.5 0v-.25H9.25a.75.75 0 1 1 0-1.5h.25v-4.5h-.25a.75.75 0 1 1 0-1.5H11v-.25a.75.75 0 0 1 .75-.75m-.75 2.5v1.5h1.75a.75.75 0 1 0 0-1.5zm1.75 3H11v1.5h1.75a.75.75 0 1 0 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinLock;
