import React from "react";
const BabyBed_01: React.FC<
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
        d="M12 7v8M8 7v8m8-8v8"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M20 20V4h2M4 20V4H2" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 7h16M4 15h16M4 18h16"
      />
    </svg>
  );
};
export default BabyBed_01;
