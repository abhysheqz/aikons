import React from "react";
const Parabola_01: React.FC<
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
        d="M21 3c0 8.284-4.03 15-9 15S3 11.284 3 3M3 21h2m10 0h2m2 0h2M7 21h2m2 0h2"
      />
    </svg>
  );
};
export default Parabola_01;
