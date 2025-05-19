import React from "react";
const CheckList: React.FC<
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
        d="M11 6h10M11 12h10M11 18h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 7.393 4.5 9 8 4M3 18.393 4.5 20 8 15"
      />
    </svg>
  );
};
export default CheckList;
