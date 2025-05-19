import React from "react";
const GolfCart: React.FC<
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
        d="M3.999 19h-2v-7h6l2 3.999h4l1.988-1.99 6.012-.01v5h-2m-4 0h-8"
      />
      <circle
        cx={6}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={18}
        cy={19}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.999 12V3M19 14 16 3M2 3h17M16 14l-2-3.5m-1.5 1 3-2"
      />
    </svg>
  );
};
export default GolfCart;
