import React from "react";
const MaleSymbol: React.FC<
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
        d="M21 9A6 6 0 1 1 9 9a6 6 0 0 1 12 0M3 15v2c0 1.886 0 2.828.586 3.414S5.114 21 7 21h2m-5-1 6.5-6.5"
      />
    </svg>
  );
};
export default MaleSymbol;
