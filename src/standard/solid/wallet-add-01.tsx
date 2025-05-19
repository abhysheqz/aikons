import React from "react";
const WalletAdd_01: React.FC<
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
        d="M5.75 18.25v2.5a1 1 0 1 0 2 0v-2.5h2.5a1 1 0 1 0 0-2h-2.5v-2.5a1 1 0 1 0-2 0v2.5h-2.5a1 1 0 1 0 0 2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.838 2.25c1.608 0 2.912 1.231 2.912 2.75v1.25H19A2.75 2.75 0 0 1 21.75 9v2.25H18A1.75 1.75 0 0 0 16.25 13v2c0 .966.783 1.75 1.75 1.75h3.75V19A2.75 2.75 0 0 1 19 21.75H9V19.5h1.25a2.25 2.25 0 0 0 0-4.5H9v-1.25a2.25 2.25 0 1 0-4.5 0V15H2.25V5c0-1.519 1.304-2.75 2.912-2.75zM5.274 4.082a1.084 1.084 0 0 0 .001 2.167h11.533v-1.25c0-.506-.434-.917-.97-.917z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.75 15.25H18a.25.25 0 0 1-.25-.25v-2a.25.25 0 0 1 .25-.25h3.75z"
      />
    </svg>
  );
};
export default WalletAdd_01;
