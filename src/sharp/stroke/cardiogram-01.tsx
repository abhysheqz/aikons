import React from "react";
const Cardiogram_01: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.02 18.015h-.008m3.997 0h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.012 9.006H9.01l1.999 2.002 1.998-4.004 1.999 3.003 1.998-.023"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m21.998 15.009-.007 5.996a.01.01 0 0 1-.01.01H2.02a.01.01 0 0 1-.01-.01v-5.996m19.987 0 .014-11.983a.01.01 0 0 0-.01-.01H2.022a.01.01 0 0 0-.01.01v11.983m19.986 0H2.012"
      />
    </svg>
  );
};
export default Cardiogram_01;
