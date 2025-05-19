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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 0v8m-3-3h6"
      />
    </svg>
  );
};
export default FemaleSymbol;
