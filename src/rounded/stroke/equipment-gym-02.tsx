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
        d="M3 3v18M21 3v18M22 6H2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 10c1.105 0 2 .97 2 2.165 0 .283-.05.554-.142.802-.294.798-3.489.617-3.716 0a2.3 2.3 0 0 1-.142-.802c0-1.196.895-2.165 2-2.165ZM8.5 10c1.105 0 2 .97 2 2.165 0 .283-.05.554-.142.802-.294.798-3.489.617-3.716 0a2.3 2.3 0 0 1-.142-.802c0-1.196.895-2.165 2-2.165Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 10V6m7 4V6"
      />
    </svg>
  );
};
export default EquipmentGym_02;
