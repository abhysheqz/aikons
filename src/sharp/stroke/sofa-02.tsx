import React from "react";
const Sofa_02: React.FC<
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
        d="M5.017 17v3m14-3v3M20.017 8.992V5.997a2 2 0 0 0-2-1.997h-12c-1.105 0-2 .894-2 1.997v2.995M12.017 4v9.984"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.998 10.845v.128m0 0v3.038l5.943-.01h6.062v-3.037m-12.005.01q0-.104-.012-.203a1.998 1.998 0 1 0-2.957 1.969v4.158a.1.1 0 0 0 .1.1l8.784-.01h8.958a.1.1 0 0 0 .1-.1V12.73a1.996 1.996 0 0 0 1.027-1.75 1.998 1.998 0 0 0-3.995-.016m-12.005.01v.016m12.005-.155v.128m0 0v.018"
      />
    </svg>
  );
};
export default Sofa_02;
