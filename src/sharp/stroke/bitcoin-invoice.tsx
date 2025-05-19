import React from "react";
const BitcoinInvoice: React.FC<
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
        strokeWidth={1.5}
        d="M18 7.994h4V3.998A2 2 0 0 0 20 2c-1.105 0-2 .894-2 1.998z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.62 2.019H2.1a.1.1 0 0 0-.1.1v19.286a.1.1 0 0 0 .148.087l3.618-1.994 4.16 2.486a.1.1 0 0 0 .103 0l4.226-2.486 3.622 1.994a.1.1 0 0 0 .148-.087V7.916"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8.125 13.488V7.495m1.875 0V5.996m0 8.99v-1.498m-1.875-2.997h3.75m0 0c.621 0 1.125.504 1.125 1.124v.75c0 .62-.504 1.123-1.125 1.123H7m4.875-2.997c.621 0 1.125-.503 1.125-1.123v-.75c0-.62-.504-1.123-1.125-1.123H7"
      />
    </svg>
  );
};
export default BitcoinInvoice;
