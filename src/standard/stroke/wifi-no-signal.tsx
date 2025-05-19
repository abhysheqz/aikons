import React from "react";
const WifiNoSignal: React.FC<
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
        d="M20.749 7.07A13.94 13.94 0 0 0 12 4C8.69 4 5.648 5.149 3.251 7.07c-.76.61-.832 1.71-.26 2.5l8.2 11.313a1 1 0 0 0 1.619 0l8.199-11.314c.572-.79.5-1.89-.26-2.5"
      />
    </svg>
  );
};
export default WifiNoSignal;
