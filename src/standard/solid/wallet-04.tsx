import React from "react";
const Wallet_04: React.FC<
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
        d="M15.75 7.75V3.482c0-.957-.785-1.732-1.753-1.732-.257 0-.51.056-.743.163l-9.7 4.477A2.23 2.23 0 0 0 2.25 8.415V19.5A2.75 2.75 0 0 0 5 22.25h14a2.75 2.75 0 0 0 2.75-2.75v-9A2.75 2.75 0 0 0 19 7.75zm-1.929 0V3.754L5.164 7.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wallet_04;
