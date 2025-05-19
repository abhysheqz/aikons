import React from "react";
const BounceLeft: React.FC<
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
        d="M9 10c2.115 3.01 3.44 8.066 4.087 11 1.346-2.71 4.696-5.938 6.913-3.892"
      />
      <circle
        cx={2}
        cy={2}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 8 3)"
      />
    </svg>
  );
};
export default BounceLeft;
