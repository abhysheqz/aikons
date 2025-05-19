import React from "react";
const WifiConnected_01: React.FC<
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
        d="M4.185 9.218c4.921-2.957 10.709-2.957 15.63 0m-10.99 6.4a8.46 8.46 0 0 1 6.35 0L21.01 7.57c.572-.79.5-1.89-.26-2.5A13.94 13.94 0 0 0 12 2C8.69 2 5.648 3.149 3.251 5.07c-.76.61-.832 1.71-.26 2.5L12 20m-5.616-7.749a13.23 13.23 0 0 1 11.232 0M14.5 18.5 17 21l5-6"
      />
    </svg>
  );
};
export default WifiConnected_01;
