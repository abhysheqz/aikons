import React from "react";
const SquareLockPassword: React.FC<
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
        d="M6 8.25A2.75 2.75 0 0 0 3.25 11v9A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20v-9A2.75 2.75 0 0 0 18 8.25zm3.5 6.25a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2zm4.991 0a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 6.5a5.5 5.5 0 1 1 11 0V9a1 1 0 1 1-2 0V6.5a3.5 3.5 0 1 0-7 0V9a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareLockPassword;
