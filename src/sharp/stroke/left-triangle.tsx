import React from "react";
const LeftTriangle: React.FC<
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
        d="M20 15h-5v5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.998 11h-1.993v9.002h-9.002v2.005M20.005 7.99V2.003a.01.01 0 0 0-.017-.007L2.007 19.983a.01.01 0 0 0 .007.017h5.985"
      />
    </svg>
  );
};
export default LeftTriangle;
