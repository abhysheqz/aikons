import React from "react";
const RotateRight_01: React.FC<
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
        d="M18.218 5.564a2.36 2.36 0 0 1 3.221.874 2.36 2.36 0 0 1-.873 3.222l-3.931 2.256c.375.643.644 1.212.84 1.788.263.767.384 1.51.48 2.392.147 1.373-.023 2.723-.73 3.652l-.02.025c-.857 1.026-2.174 1.52-3.45 1.762-1.22.23-2.514.253-3.59.22l-1.83.916a.75.75 0 0 1-.997-.318l-4-7.5a.75.75 0 0 1 .327-1.024l1.73-.865 2.09-5.872a2.35 2.35 0 0 1 1.52-1.457l.032-.01a2.31 2.31 0 0 1 2.798 1.282c.18.41.259.877.19 1.348-.06.4-.124.709-.189.977z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.501 1a1 1 0 0 1 1 1v3.004a1 1 0 0 1-1 1h-2.509a1 1 0 1 1 0-2h.1c-.551-.384-1.05-.642-1.305-.714l-.037-.012c-1.102-.359-2.287-.363-3.328.027-1.602.6-2.743 1.599-3.53 3.149a1 1 0 1 1-1.784-.906C3.128 3.542 4.66 2.205 6.72 1.432c1.504-.563 3.15-.54 4.633-.06.634.184 1.454.668 2.148 1.183V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateRight_01;
