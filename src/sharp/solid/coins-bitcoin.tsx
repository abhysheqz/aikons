import React from "react";
const CoinsBitcoin: React.FC<
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
        d="M4.032 7.6c-.184.77-.282 1.574-.282 2.4 0 5.66 4.59 10.25 10.25 10.25.826 0 1.63-.098 2.4-.282A8.75 8.75 0 1 1 4.032 7.6"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 1.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m.75 4.5v-1h-1.5v1h-2v8.5h2v1h1.5v-1h.75c1.347 0 2.25-1.232 2.25-2.5 0-.645-.234-1.281-.64-1.75.406-.469.64-1.105.64-1.75 0-1.268-.903-2.5-2.25-2.5zm1.5 2.5c0 .665-.44 1-.75 1h-2.75v-2h2.75c.31 0 .75.335.75 1m-.75 2.5h-2.75v2h2.75c.31 0 .75-.335.75-1s-.44-1-.75-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoinsBitcoin;
