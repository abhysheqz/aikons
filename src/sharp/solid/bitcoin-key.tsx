import React from "react";
const BitcoinKey: React.FC<
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
        d="M8.5 1.25a5.75 5.75 0 0 0-3.25 10.494v8.067l2.72 2.72a.75.75 0 0 0 1.06 0l2.72-2.72v-2.122L10.56 16.5l1.19-1.19v-3.566A5.75 5.75 0 0 0 8.5 1.25M8.493 5.5C7.67 5.5 7 6.172 7 7s.669 1.5 1.493 1.5h.014C9.33 8.5 10 7.828 10 7s-.669-1.5-1.493-1.5zM18.25 11.25v1.5h1.125c1.035 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.235.313.375.703.375 1.125v.75c0 1.035-.84 1.875-1.875 1.875H18.25v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H13.75v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinKey;
