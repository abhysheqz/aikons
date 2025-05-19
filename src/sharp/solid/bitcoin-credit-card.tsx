import React from "react";
const BitcoinCreditCard: React.FC<
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
        d="M18.75 11.75v1.5h1.125c1.035 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.235.313.375.703.375 1.125v.75c0 1.035-.84 1.875-1.875 1.875H18.75v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H14.25v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v4.25H1.25zM1.25 8.25h21.5v5.106a3.38 3.38 0 0 0-2.5-1.585V10.25h-4.5v1.5h-3v4.5h1.125v1.5H12.75v1.5H2a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default BitcoinCreditCard;
