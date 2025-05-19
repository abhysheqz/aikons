import React from "react";
const ArrowDown_01: React.FC<
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
        d="M18.593 8.195a1 1 0 0 1 .212 1.398 53.178 53.178 0 0 1-2.457 3.063c-.662.762-1.396 1.55-2.081 2.156-.342.302-.695.58-1.04.787-.316.19-.751.401-1.227.401s-.912-.21-1.228-.401a7.4 7.4 0 0 1-1.039-.787c-.685-.606-1.42-1.394-2.081-2.156a53 53 0 0 1-2.457-3.063A1 1 0 0 1 6 8h12c.206 0 .414.063.593.195"
      />
    </svg>
  );
};
export default ArrowDown_01;
