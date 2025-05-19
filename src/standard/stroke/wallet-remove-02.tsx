import React from "react";
const WalletRemove_02: React.FC<
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
        d="M17.5 15.5a.5.5 0 0 0 0-1m0 1a.5.5 0 0 1 0-1m0 1v-1M9 15.5l-6 6m0-6 6 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 21.5h7a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H3v4M15 8.5V3.724a1.224 1.224 0 0 0-1.75-1.105L3.903 7.07C3.35 7.333 3 7.89 3 8.5"
      />
    </svg>
  );
};
export default WalletRemove_02;
