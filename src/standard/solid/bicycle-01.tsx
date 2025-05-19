import React from "react";
const Bicycle_01: React.FC<
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
        d="M5.75 13a2.999 2.999 0 1 0 3 2.998 3 3 0 0 0-3-2.998m-5 2.998c0-2.76 2.24-4.998 5-4.998a4.999 4.999 0 1 1 0 9.996c-2.76 0-5-2.237-5-4.998M18.25 13a2.999 2.999 0 1 0 3 2.998 3 3 0 0 0-3-2.998m-5 2.998c0-2.76 2.24-4.998 5-4.998a4.999 4.999 0 1 1-5 4.998"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.28 7.154a1 1 0 0 1 .318 1.378l-5 7.996a1 1 0 0 1-.848.47h-5a1 1 0 0 1 0-2h4.446l4.706-7.526a1 1 0 0 1 1.378-.318"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 7.002a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-.843l4.106 4.85a1 1 0 1 1-1.526 1.293l-5.2-6.143H4.75a1 1 0 0 1-1-1M16.103 5.06c.445.026.872.073 1.28.182.724.193 1.192.532 1.399 1.253a1 1 0 0 0 1.922-.553c-.46-1.597-1.633-2.32-2.806-2.633-.87-.232-1.854-.262-2.589-.285q-.271-.008-.49-.018c-.724-.038-1.207.653-1.021 1.29l3.492 11.987a1 1 0 0 0 1.92-.559z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bicycle_01;
