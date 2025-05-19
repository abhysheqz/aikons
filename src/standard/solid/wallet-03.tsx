import React from "react";
const Wallet_03: React.FC<
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
        d="M19 7.75a2.75 2.75 0 0 1 2.75 2.75v9A2.75 2.75 0 0 1 19 22.25H5a2.75 2.75 0 0 1-2.75-2.75v-11l.004-.077A.75.75 0 0 1 3 7.75zm-1.5 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M13.776 1.75c1.09 0 1.974.884 1.974 1.974V6.5H3.383q.096-.058.197-.107l9.348-4.452.203-.083c.207-.071.425-.108.645-.108"
      />
    </svg>
  );
};
export default Wallet_03;
