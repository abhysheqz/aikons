import React from "react";
const WalletAdd_02: React.FC<
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
        d="M13.776 1.75c1.09 0 1.974.884 1.974 1.974V6.5H3.383q.096-.058.197-.107l9.348-4.452.203-.083c.207-.071.425-.108.645-.108M5.75 21.25v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 1 1 2 0v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 7.75a2.75 2.75 0 0 1 2.75 2.75v9A2.75 2.75 0 0 1 19 22.25H9V20h1.25a2.25 2.25 0 0 0 0-4.5H9v-1.25a2.25 2.25 0 0 0-4.5 0v1.25H2.25v-7l.004-.077A.75.75 0 0 1 3 7.75zm-1.5 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WalletAdd_02;
