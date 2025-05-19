import React from "react";
const RenewableEnergy: React.FC<
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
        d="M9.5 4.5 9.96 2A10.22 10.22 0 0 0 2 9.96m17.5-.46 2.5.46A10.22 10.22 0 0 0 14.04 2m.46 17.5-.46 2.5A10.22 10.22 0 0 0 22 14.04M9.96 22A10.22 10.22 0 0 1 2 14.04l2.5.46M8.5 12.458 12.778 7v4.549H15.5L11.222 17v-4.542z"
      />
    </svg>
  );
};
export default RenewableEnergy;
