import React from "react";
const EquipmentGym_02: React.FC<
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
        d="M4 3v17.5M20 3v17.5M22 6H2M15.499 10c1.105 0 2 .98 2 2.19 0 .286-.05.56-.142.81h-3.716a2.4 2.4 0 0 1-.142-.81c0-1.21.896-2.19 2-2.19M8.5 10c1.105 0 2 .98 2 2.19 0 .286-.05.56-.142.81H6.642a2.4 2.4 0 0 1-.142-.81c0-1.21.895-2.19 2-2.19M8.5 10V6m7 4V6"
      />
    </svg>
  );
};
export default EquipmentGym_02;
