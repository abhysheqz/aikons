import React from "react";
const CableCar: React.FC<
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
        d="M4 2h10m0 0h6m-6 0-2 3.5m-3 0h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 16h16m-8-8v8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 15.5c0-2.192.45-4.234.858-5.632C5.193 8.716 6.278 8 7.478 8h9.044c1.2 0 2.285.716 2.62 1.868.408 1.398.858 3.44.858 5.632 0 2.12-.421 3.819-.817 4.947-.35.995-1.328 1.553-2.382 1.553H7.2c-1.054 0-2.033-.558-2.382-1.553A15 15 0 0 1 4 15.5"
      />
    </svg>
  );
};
export default CableCar;
