import React from "react";
const Artboard: React.FC<
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
        d="M8 4.5V3m8 1.5V3M19.5 8H21m-1.5 8H21M8 21v-1.5m8 1.5v-1.5M3 8h1.5M3 16h1.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8 11c0-1.414 0-2.121.44-2.56C8.878 8 9.585 8 11 8h2c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v2c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-2c-1.414 0-2.121 0-2.56-.44C8 15.122 8 14.415 8 13z"
      />
    </svg>
  );
};
export default Artboard;
