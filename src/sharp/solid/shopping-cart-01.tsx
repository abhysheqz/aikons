import React from "react";
const ShoppingCart_01: React.FC<
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
        d="M5.167 1.25H1.75v1.947h2.628l2.629 12.239a3.5 3.5 0 0 0-1.219 1.111c-.393.588-.621 1.776-.621 2.677v.973H7.77q-.02.15-.02.303a2.25 2.25 0 1 0 4.48-.303h2.54q-.02.15-.02.303a2.25 2.25 0 1 0 2.13-2.247l.001-.003H7.313c0-.785.636-1.421 1.42-1.421h6.452c2.547 0 4.383-1.165 5.528-3.095 1.103-1.86 1.537-4.376 1.537-7.129a.97.97 0 0 0-.976-.973H6.897L6.121 2.02a.976.976 0 0 0-.954-.77M9.25 20.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m7 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShoppingCart_01;
