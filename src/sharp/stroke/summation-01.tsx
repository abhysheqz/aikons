import React from "react";
const Summation_01: React.FC<
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
        strokeWidth={1.5}
        d="M19.023 6.848v-3.83H5.034a.01.01 0 0 0-.007.016l8.041 8.97-8.042 8.977a.01.01 0 0 0 .007.017l13.99.02v-3.864"
      />
    </svg>
  );
};
export default Summation_01;
