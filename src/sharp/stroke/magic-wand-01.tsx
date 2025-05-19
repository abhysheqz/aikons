import React from "react";
const MagicWand_01: React.FC<
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
        d="m12 15 7 7 2-2-7-7m-2 2-3-3 2-2 3 3m-2 2 2-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 4 .332.896a3 3 0 0 0 1.772 1.772L9 7l-.896.332a3 3 0 0 0-1.772 1.772L6 10l-.332-.896a3 3 0 0 0-1.772-1.772L3 7l.896-.332a3 3 0 0 0 1.772-1.772zM17 2l.442 1.195a4 4 0 0 0 2.363 2.363L21 6l-1.195.442a4 4 0 0 0-2.363 2.363L17 10l-.442-1.195a4 4 0 0 0-2.363-2.363L13 6l1.195-.442a4 4 0 0 0 2.363-2.363z"
      />
    </svg>
  );
};
export default MagicWand_01;
