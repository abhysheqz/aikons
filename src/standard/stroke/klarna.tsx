import React from "react";
const Klarna: React.FC<
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
        cx={20}
        cy={18.5}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 3.5h4v17H2zM15 3.5h-3.802c0 6.346-5.198 9-5.198 9l5.893 8H16.5L11 13s4-3 4-9.5Z"
      />
    </svg>
  );
};
export default Klarna;
