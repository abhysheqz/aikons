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
        fill="currentColor"
        fillRule="evenodd"
        d="M7 8a5 5 0 1 1 10 0A5 5 0 0 1 7 8m6 6.93A7.001 7.001 0 0 0 12 1a7 7 0 0 0-1 13.93V17H9a1 1 0 1 0 0 2h2v3a1 1 0 1 0 2 0v-3h2a1 1 0 1 0 0-2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FemaleSymbol;
