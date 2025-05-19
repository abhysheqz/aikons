import React from "react";
const Obtuse: React.FC<
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
        d="M3.404 3.533a1 1 0 0 0-1.2.64l-1.208 3.5 1.89.652.435-1.26 5.234 10.612a1 1 0 0 0 .892.55h9.793l-.883.738 1.28 1.535 3-2.505a1 1 0 0 0-.002-1.537l-3-2.493-1.277 1.539.87.723h-3.585a6.75 6.75 0 0 0-8.417-5.757L5.04 6.033l1.644.434.51-1.934z"
      />
    </svg>
  );
};
export default Obtuse;
