import React from "react";
const Strategy: React.FC<
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
        d="m18 11 2.346-2.151c.436-.4.654-.6.654-.849m-3-3 2.346 2.151c.436.4.654.6.654.849m0 0C3 8 3 21 3 21"
      />
      <circle
        cx={5.5}
        cy={5.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m13 21 5-5m0 5-5-5"
      />
    </svg>
  );
};
export default Strategy;
