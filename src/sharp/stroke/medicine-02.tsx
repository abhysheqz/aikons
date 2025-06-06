import React from "react";
const Medicine_02: React.FC<
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
        d="M20.193 12.999a6 6 0 1 1-10.392 6m10.392-6a6 6 0 0 0-10.392 6m10.392-6-10.392 6M10.043 5.542l5.085-3.005c1.872-1.106 4.266-.45 5.347 1.467A4.08 4.08 0 0 1 20 8.682m-9.957-3.14L4.958 8.547c-1.872 1.106-2.514 3.556-1.433 5.472A3.9 3.9 0 0 0 6.5 16m3.543-10.458L11.5 8"
      />
    </svg>
  );
};
export default Medicine_02;
