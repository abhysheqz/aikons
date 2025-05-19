import React from "react";
const BitcoinCloud: React.FC<
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
        d="M12.75 11.75v1.5h1.125c1.036 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.236.313.375.703.375 1.125v.75c0 1.035-.84 1.875-1.875 1.875H12.75v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H8.25v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.853 6.865a5.752 5.752 0 0 0 .596 11.359l.035.003 1.391.003v-1.98H6.75v-4.5h3v-1.5h4.5v1.52c1.688.187 3 1.618 3 3.355v.75c0 .394-.068.773-.192 1.125.124.352.192.731.192 1.125v.125h.25a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
      />
    </svg>
  );
};
export default BitcoinCloud;
