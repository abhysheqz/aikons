import React from "react";
const UsbNotConnected_02: React.FC<
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
        d="M13.014 21.464a4 4 0 0 1-1.222.46C11.405 22 10.94 22 10.01 22s-1.397 0-1.784-.077a4 4 0 0 1-3.148-3.143C5 18.394 5 17.93 5 17v-5.5c0-1.886 0-2.828.587-3.414S7.118 7.5 9.007 7.5h2.004c1.888 0 2.833 0 3.42.586.405.404.53.978.569 1.914"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m19 12.5-6 6m6 0-6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 7.5v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.107 2 11.404 2 10 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 3.393 6.5 4.096 6.5 5.5v2M9.5 4.5h1"
      />
    </svg>
  );
};
export default UsbNotConnected_02;
