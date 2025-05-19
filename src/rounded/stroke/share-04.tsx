import React from "react";
const Share_04: React.FC<
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
        d="M10.002 3c-2.947.032-4.591.22-5.684 1.312C3 5.63 3 7.752 3 11.997s0 6.366 1.318 7.685S7.76 21 12.003 21s6.366 0 7.685-1.319c1.093-1.092 1.28-2.737 1.312-5.685M14 3h4c1.414 0 2.121 0 2.56.44C21 3.878 21 4.585 21 6v4m-1-6-9 9"
      />
    </svg>
  );
};
export default Share_04;
