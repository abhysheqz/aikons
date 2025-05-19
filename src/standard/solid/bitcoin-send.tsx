import React from "react";
const BitcoinSend: React.FC<
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
        d="M1 5a1 1 0 0 1 1-1h7.889C12.159 4 14 5.84 14 8.111a4.88 4.88 0 0 1-1.8 3.79A4.5 4.5 0 0 1 9.5 20H2a1 1 0 1 1 0-2.001V6a1 1 0 0 1-1-1m3 1v5h5.111A2.89 2.89 0 0 0 12 8.111 2.11 2.11 0 0 0 9.889 6zm0 7v5h5.5a2.5 2.5 0 0 0 0-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1M5 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M19.117 8.576a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 18.5 14.5V13H16a1 1 0 1 1 0-2h2.5V9.5a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinSend;
