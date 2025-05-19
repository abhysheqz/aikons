import React from "react";
const TokenSquare: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M2.5 2.5h19v19h-19z" />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m12 7 .393 1.062a6 6 0 0 0 3.545 3.545L17 12l-1.062.393a6 6 0 0 0-3.545 3.545L12 17l-.393-1.062a6 6 0 0 0-3.545-3.545L7 12l1.062-.393a6 6 0 0 0 3.545-3.545z"
      />
    </svg>
  );
};
export default TokenSquare;
