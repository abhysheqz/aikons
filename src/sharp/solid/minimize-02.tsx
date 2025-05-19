import React from "react";
const Minimize_02: React.FC<
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
        d="M11.943 4.096a2.47 2.47 0 0 1 4.793 1.19L15.72 9.595l.887.142.023.003c.942.141 1.685.253 2.276.381.6.13 1.103.29 1.544.554 1.277.765 2.3 1.988 2.3 3.799 0 1.087-.263 1.87-.778 3.409l-.132.393-.008.024-1.83 4.45h-9.36l-5.836-7.189a2.49 2.49 0 0 1 3.552-3.46l1.223 1.049z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.53 2.97 1.72-1.72 1.06 1.06-1.719 1.72h1.19v1.5H6.03V1.78h1.5zM2.97 7.53H1.78v-1.5h3.75v3.75h-1.5V8.591l-1.72 1.72L1.25 9.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Minimize_02;
