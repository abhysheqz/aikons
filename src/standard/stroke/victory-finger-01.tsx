import React from "react";
const VictoryFinger_01: React.FC<
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
        d="m8.461 12.5-1.65-8.327c-.176-.97.411-1.994 1.393-2.131.933-.131 1.854.415 2.004 1.3l1.264 6.662 1.223-6.662c.197-.944 1.148-1.506 2.095-1.3.94.205 1.489 1.27 1.283 2.203l-1.089 5.76c2.338.676 3.347 1.366 4.067 2.288 1.017 1.639.101 3.766-.727 5.72a12 12 0 0 1-.908 1.426c-.267.369-.424.81-.424 1.265V22m-9.005 0v-.693c.001-.518-.203-1.014-.55-1.397-5.663-6.228-1.751-7.91.281-9.906"
      />
    </svg>
  );
};
export default VictoryFinger_01;
