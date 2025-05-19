import React from "react";
const Calling: React.FC<
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
        d="M14.093 1.006a1 1 0 1 0-.22 1.988c3.706.41 6.706 3.41 7.116 7.116a1 1 0 1 0 1.988-.22c-.513-4.637-4.247-8.371-8.884-8.884m.139 5.026a1 1 0 0 0-.498 1.937c1.052.27 2.01 1.228 2.28 2.28a1 1 0 0 0 1.937-.498c-.452-1.759-1.96-3.267-3.719-3.72M6.497 2.793a2 2 0 0 0-3.203-.52L1.861 3.708a2.88 2.88 0 0 0-.858 2.17c.444 9.243 7.859 16.658 17.103 17.102a2.88 2.88 0 0 0 2.17-.858l1.432-1.433a2 2 0 0 0-.52-3.203l-4.114-2.057a2 2 0 0 0-2.308.374l-3.317 3.317a16.07 16.07 0 0 1-6.586-6.586L8.18 9.216a2 2 0 0 0 .374-2.308z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Calling;
