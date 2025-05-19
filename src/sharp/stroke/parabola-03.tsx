import React from "react";
const Parabola_03: React.FC<
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
        d="M21 2c0 8.284-4.03 15-9 15S3 10.284 3 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.996 22.003V2.683M15 4.996 11.996 2 9 5.004"
      />
      <path fill="currentColor" d="M2 20.75h20v-1.5H2z" />
    </svg>
  );
};
export default Parabola_03;
