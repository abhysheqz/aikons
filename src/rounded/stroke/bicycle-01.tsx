import React from "react";
const Bicycle_01: React.FC<
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
        d="M6 20.003a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 20.003a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 16.003h4.37a1 1 0 0 0 .87-.506l4.26-7.494M12 13.003l-5-6m0 0H5m2 0h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.004 6.219c-.204-.576-.564-1.476-1.764-1.896-.78-.3-2.7-.42-2.94-.24-.347.086-.36.48-.192 1.02.136.579.348 1.325.54 2.04.492 1.83 1.572 5.796 2.376 8.856"
      />
    </svg>
  );
};
export default Bicycle_01;
