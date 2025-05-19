import React from "react";
const Calculator: React.FC<
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
        d="M5.5 3v5M8 5.5H3M8 16l-2 2m0 0-2 2m2-2 2 2m-2-2-2-2M20 6h-4M20 18.5h-4m4-3h-4M22 12H2M12 22V2"
      />
    </svg>
  );
};
export default Calculator;
