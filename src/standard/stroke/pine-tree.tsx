import React from "react";
const PineTree: React.FC<
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
        d="M9 18H5l3.706-5H6l3.53-4.5H7L12 2l5 6.5h-2.53L18 13h-2.706L19 18h-4M12 14v8"
      />
    </svg>
  );
};
export default PineTree;
