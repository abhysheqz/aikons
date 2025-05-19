import React from "react";
const TokenCircle: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m12 7 .393 1.062a6 6 0 0 0 3.545 3.545L17 12l-1.062.393a6 6 0 0 0-3.545 3.545L12 17l-.393-1.062a6 6 0 0 0-3.545-3.545L7 12l1.062-.393a6 6 0 0 0 3.545-3.545z"
      />
    </svg>
  );
};
export default TokenCircle;
