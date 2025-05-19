import React from "react";
const BitcoinMind: React.FC<
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
        d="M2 9.75a8.73 8.73 0 0 0 3 6.595v5.405c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V19.1l2.033.254a1.75 1.75 0 0 0 1.967-1.737v-2.992l1.7-1.275a.75.75 0 0 0 .174-1.016l-1.877-2.816A8.75 8.75 0 0 0 2 9.75m9.5-4a.75.75 0 0 0-1.5 0V6H8.25a.75.75 0 0 0 0 1.5h.25V12h-.25a.75.75 0 0 0 0 1.5H10v.25a.75.75 0 0 0 1.5 0v-.25h.25a2.25 2.25 0 0 0 1.677-3.75A2.25 2.25 0 0 0 11.75 6h-.25zM10 9V7.5h1.75a.75.75 0 0 1 0 1.5zm0 1.5h1.75a.75.75 0 0 1 0 1.5H10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinMind;
