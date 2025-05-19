import React from "react";
const BitcoinBag: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10.125 17.511v-6.004m1.875 0v-1.501m0 9.006v-1.5m-1.875-3.003h3.75m0 0c.621 0 1.125.504 1.125 1.126v.75c0 .622-.504 1.126-1.125 1.126H9m4.875-3.002c.621 0 1.125-.504 1.125-1.126v-.75c0-.622-.504-1.126-1.125-1.126H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.943 16.848c-.657-3.952-4.167-8.115-5.943-9.843H9c-1.776 1.728-5.286 5.89-5.943 9.843-.488 2.94 2.222 5.168 5.251 5.168h7.384c3.029 0 5.74-2.228 5.25-5.168"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.08 7.13 7 3.595a.1.1 0 0 1 .105-.15l2.926.582 1.893-1.983a.1.1 0 0 1 .144-.001l1.935 1.984 2.902-.58a.1.1 0 0 1 .106.148L14.992 7.02"
      />
    </svg>
  );
};
export default BitcoinBag;
