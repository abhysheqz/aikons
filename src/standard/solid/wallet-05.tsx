import React from "react";
const Wallet_05: React.FC<
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
        d="M4 3.25A2.75 2.75 0 0 0 1.25 6v3.25h6.215a1.75 1.75 0 0 1 1.456.78l1.406 2.109a.25.25 0 0 0 .208.111h2.93a.25.25 0 0 0 .208-.111l1.406-2.11a1.75 1.75 0 0 1 1.456-.779h6.215V6A2.75 2.75 0 0 0 20 3.25zm18.75 7.5h-6.215a.25.25 0 0 0-.208.111l-1.406 2.11a1.75 1.75 0 0 1-1.456.779h-2.93a1.75 1.75 0 0 1-1.456-.78l-1.406-2.109a.25.25 0 0 0-.208-.111H1.25V18A2.75 2.75 0 0 0 4 20.75h16A2.75 2.75 0 0 0 22.75 18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wallet_05;
