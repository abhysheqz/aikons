import React from "react";
const FemaleSymbol: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0ZM12 14v8m-3-4h6"
      />
    </svg>
  );
};
export default FemaleSymbol;
