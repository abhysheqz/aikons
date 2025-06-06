import React from "react";
const RotateRight_06: React.FC<
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
        d="M11.609 5H14m0 0V2m0 3C11.13 1 5.127 1.568 3 6M19.009 11.228l1.132-.643c.648-.368.87-1.183.496-1.82a1.367 1.367 0 0 0-1.85-.488l-.782.444m1.004 2.507-5.4 3.068m5.4-3.068a1.367 1.367 0 0 1 1.81.51 1.32 1.32 0 0 1-.497 1.822l-1.954 1.11m.64-3.442-.04.023m-.6 3.419-3.91 2.221m3.91-2.221a1.367 1.367 0 0 1 1.85.488 1.32 1.32 0 0 1-.496 1.82l-8.21 4.664c-1.296.736-2.953.3-3.7-.975l-3.57-6.083a1.75 1.75 0 0 1-.04-1.706L7.4 6.814A1.52 1.52 0 0 1 8.78 6c.901.015 1.591.794 1.483 1.674l-.65 2.737 7.039-3.998a1.367 1.367 0 0 1 1.85.488 1.32 1.32 0 0 1-.496 1.82m0 0-5.021 2.852"
      />
    </svg>
  );
};
export default RotateRight_06;
