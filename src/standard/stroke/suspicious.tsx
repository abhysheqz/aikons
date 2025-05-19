import React from "react";
const Suspicious: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17c.836-.628 1.874-1 3-1s2.164.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 8c.52 0 1.747 0 2.5.709m0 0c.214.201.5.515.5.791a.5.5 0 0 1-1 0c.005-.295.333-.576.5-.791ZM14 8c.52 0 1.746 0 2.5.709m0 0c.214.201.5.515.5.791a.5.5 0 0 1-1 0c.005-.295.333-.576.5-.791Z"
      />
    </svg>
  );
};
export default Suspicious;
