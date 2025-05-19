import React from "react";
const Parabola_02: React.FC<
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
        d="M21 2c0 8.283-4.03 14.998-9 14.998S3 10.283 3 2M3 19.997h2m10 0h2m2 0h2m-14 0h2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 22.003V2.61m3.004 2.384L12 2 9.004 5.004"
      />
    </svg>
  );
};
export default Parabola_02;
