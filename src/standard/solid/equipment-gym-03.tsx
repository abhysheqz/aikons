import React from "react";
const EquipmentGym_03: React.FC<
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
        d="M7 3.5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0V7h10v1.5a1 1 0 1 0 2 0v-5a1 1 0 1 0-2 0V5H7zm-2.5 1a1 1 0 0 0-2 0V5a1 1 0 0 0 0 2v.5a1 1 0 0 0 2 0zm17 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0V7a1 1 0 1 0 0-2zM7 13.25a.75.75 0 0 0-.67.415l-2 4A.75.75 0 0 0 5 18.75h2v1.75a1 1 0 1 0 2 0v-1.75h6v1.75a1 1 0 1 0 2 0v-1.75h2a.75.75 0 0 0 .67-1.085l-2-4a.75.75 0 0 0-.67-.415h-1V8.5a1 1 0 1 0-2 0v4.75h-4V8.5a1 1 0 1 0-2 0v4.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentGym_03;
