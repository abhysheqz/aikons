import React from "react";
const BitcoinFilter: React.FC<
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
        d="M13.25 1.25v1.5h1.125c1.036 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.235.313.375.703.375 1.125v.75c0 1.036-.84 1.875-1.875 1.875H13.25v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H8.75v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 6.25H3a.75.75 0 0 0-.75.75v4.351l6.056 5.047.954 5.725a.75.75 0 0 0 1.075.548l4.309-2.154 1.024-4.098 6.082-5.068V7a.75.75 0 0 0-.75-.75h-3.365a3 3 0 0 1-.078.25c.125.352.193.731.193 1.125v.75a3.375 3.375 0 0 1-3 3.354v1.521h-4.5v-1.5h-3z"
      />
    </svg>
  );
};
export default BitcoinFilter;
