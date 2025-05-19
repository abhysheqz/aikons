import React from "react";
const Sofa_01: React.FC<
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
        d="M5.01 17v3m13.975-3v3M19.983 9V6c0-1.105-.894-2-1.996-2H6.009a2 2 0 0 0-1.996 2v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.998 10.856v.129m0 0v3.043l5.943-.01h6.062v-3.043m-12.005.01q0-.104-.012-.203A2 2 0 0 0 4 9a2 2 0 0 0-1.998 2.002 2 2 0 0 0 1.027 1.752v4.165a.1.1 0 0 0 .1.1l8.784-.01h8.958a.1.1 0 0 0 .1-.1v-4.165a2 2 0 0 0 1.027-1.752A2 2 0 0 0 20 8.99a2 2 0 0 0-1.997 1.985m-12.005.01v.017m12.005-.155v.128m0 0v.017"
      />
    </svg>
  );
};
export default Sofa_01;
