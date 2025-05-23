import React from "react";
const BiometricDevice: React.FC<
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
        strokeWidth={1.5}
        d="M5 9c0-3.3 0-4.95 1.025-5.975S8.7 2 12 2s4.95 0 5.975 1.025S19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975S15.3 22 12 22s-4.95 0-5.975-1.025S5 18.3 5 15z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 13v-2.5a4 4 0 0 0-8 0V13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 11v-.5a1.5 1.5 0 0 0-3 0V14m3-.5V15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19v.01"
      />
    </svg>
  );
};
export default BiometricDevice;
