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
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 21V3h1.5v18zm16 0V3h1.5v18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 6.75h20v-1.5H2zM12.749 12.19c0-1.559 1.169-2.94 2.75-2.94s2.75 1.381 2.75 2.94c0 .374-.066.734-.187 1.067l-.18.493h-4.766l-.18-.493a3.1 3.1 0 0 1-.187-1.068m2.75-1.44c-.628 0-1.25.58-1.25 1.44l.001.06h2.498l.001-.06c0-.86-.622-1.44-1.25-1.44M5.75 12.19c0-1.559 1.169-2.94 2.75-2.94s2.75 1.381 2.75 2.94c0 .374-.066.734-.187 1.067l-.18.493H6.117l-.18-.493a3.1 3.1 0 0 1-.187-1.068m2.75-1.44c-.628 0-1.25.58-1.25 1.44l.001.06H9.75l.001-.06c0-.86-.622-1.44-1.25-1.44"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.25 6v4h-1.5V6zm7 0v4h-1.5V6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentGym_02;
