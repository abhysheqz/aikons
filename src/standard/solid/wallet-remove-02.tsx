import React from "react";
const WalletRemove_02: React.FC<
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
        d="M13.776 1.75c1.09 0 1.974.884 1.974 1.974V6.5H3.383q.096-.058.197-.107l9.348-4.452.203-.083c.207-.071.425-.108.645-.108M8.543 14.543a1 1 0 1 1 1.414 1.414L7.664 18.25l2.293 2.293a1 1 0 0 1-1.414 1.414L6.25 19.664l-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 1.414-1.414l2.293 2.293z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 7.75a2.75 2.75 0 0 1 2.75 2.75v9A2.75 2.75 0 0 1 19 22.25h-7.736a2.25 2.25 0 0 0-.269-2.42l-.154-.17-1.41-1.41 1.41-1.41.154-.17a2.25 2.25 0 0 0 0-2.84l-.154-.17-.17-.155a2.25 2.25 0 0 0-2.84 0l-.172.154-1.409 1.41-1.409-1.41-.17-.154a2.25 2.25 0 0 0-2.42-.27V8.5l.003-.077A.75.75 0 0 1 3 7.75zm-1.5 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WalletRemove_02;
