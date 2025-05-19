import React from "react";
const BitcoinReceipt: React.FC<
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
        d="M5.75 1A2.75 2.75 0 0 0 3 3.75v17.5a.75.75 0 0 0 1.085.67L7.71 20.11l3.643 2.277a.75.75 0 0 0 .796 0l3.643-2.277 3.624 1.812a.75.75 0 0 0 1.085-.671V3.75A2.75 2.75 0 0 0 17.75 1zm6.75 5.75a.75.75 0 1 0-1.5 0V7H9.25a.75.75 0 1 0 0 1.5h.25V13h-.25a.75.75 0 0 0 0 1.5H11v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 12.75 7h-.25zM11 10V8.5h1.75a.75.75 0 1 1 0 1.5zm0 1.5h1.75a.75.75 0 1 1 0 1.5H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinReceipt;
