import React from "react";
const Displeased: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 15.684c2.095-1.377 4.504-.54 6 1.316"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 9c.52 0 1.747 0 2.5.709m0 0c.214.201.5.515.5.791a.5.5 0 0 1-1 0c.005-.295.333-.576.5-.791ZM14 9c.52 0 1.746 0 2.5.709m0 0c.214.201.5.515.5.791a.5.5 0 0 1-1 0c.005-.295.333-.576.5-.791Z"
      />
    </svg>
  );
};
export default Displeased;
