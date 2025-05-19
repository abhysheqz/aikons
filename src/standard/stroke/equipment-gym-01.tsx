import React from "react";
const EquipmentGym_01: React.FC<
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
        d="M17 18.5H7a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1ZM17 15H7a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V16a1 1 0 0 0-1-1ZM17 11.5H7a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m22 7.5-1.4-1.75A2 2 0 0 0 19.04 5H18.5M2 7.5l1.4-1.75A2 2 0 0 1 4.96 5H5.5M16 5H8M16 2v9.5M8 2v9.5"
      />
    </svg>
  );
};
export default EquipmentGym_01;
