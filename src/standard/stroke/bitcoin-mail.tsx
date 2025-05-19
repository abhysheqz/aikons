import React from "react";
const BitcoinMail: React.FC<
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
        d="M5 12.5V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 6v2.5m0 0V11m0-2.5h1.75M12 6V5m0 6.125V12m-2-6h2.75a1.25 1.25 0 1 1 0 2.5m0 0a1.25 1.25 0 1 1 0 2.5H10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19 7.5 2.707 2.707a1 1 0 0 1 .293.707V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9.086a1 1 0 0 1 .293-.707L5 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 10.5-9.036 4.97a2 2 0 0 1-1.928 0L2 10.5"
      />
    </svg>
  );
};
export default BitcoinMail;
