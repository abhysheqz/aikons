import React from "react";
const BitcoinFlashdisk: React.FC<
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
        d="M16.25 12.25v1.5h1.125c1.035 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.235.313.375.703.375 1.125v.75c0 1.035-.84 1.875-1.875 1.875H16.25v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H11.75v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375M6.25 2A.75.75 0 0 1 7 1.25h7a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V2.75h-5.5V7.5a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 5.25h-2v-1.5h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.25 10.75h-3v1.5h-3v10.495A5.75 5.75 0 0 1 4.75 17V6.75h11.5z"
      />
    </svg>
  );
};
export default BitcoinFlashdisk;
