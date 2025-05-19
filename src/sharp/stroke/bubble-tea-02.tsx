import React from "react";
const BubbleTea_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 9-1.5 13h-9L6 9M6 9l2-4h8l2 4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 9h16M12 9V2M6.5 13.011c.275-.494 2.112-1.3 3.434-.905 1.653.494 5.087 3.378 7.566.905"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.008 17h-.01M14.008 19h-.01"
      />
    </svg>
  );
};
export default BubbleTea_02;
