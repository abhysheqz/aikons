import React from "react";
const WalletAdd_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 21.5h4c2.828 0 4.243 0 5.121-.879C21 19.743 21 18.328 21 15.5v-1c0-2.828 0-4.243-.879-5.121C19.243 8.5 17.828 8.5 15 8.5H3v5M15 8.498V4.11a1.61 1.61 0 0 0-2.347-1.432L3.763 7.25C3.293 7.49 3 7.972 3 8.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 15.5a.5.5 0 0 0 0-1m0 1a.5.5 0 0 1 0-1m0 1v-1M10 18H6.5m0 0H3m3.5 0v-3.5m0 3.5v3.5"
      />
    </svg>
  );
};
export default WalletAdd_02;
