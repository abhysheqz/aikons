import React from "react";
const VirtualRealityVr_02: React.FC<
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
        d="M22 3.5H2v17h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.98 9.621 2.433 5.286a.1.1 0 0 0 .182 0l2.412-5.286m3.004 6.083V9.998h2.467c.387 0 .777.186 1.068.437.392.34.464.664.458 1.133-.047.52-.193.819-.51 1.105-.294.265-.699.364-1.096.364h-1.652m1.023 0 1.809 2.667"
      />
    </svg>
  );
};
export default VirtualRealityVr_02;
