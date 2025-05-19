import React from "react";
const FrenchFries_02: React.FC<
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
        d="M11.98 16.985h-.008"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.983 13.488V2H9.962v11.488"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.506 9.961 1.723-2.966-3.482-1.998-2.765 4.759M9.962 8.191 6.946 3 3.464 4.997l3.192 5.495"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m20.997 10.082-2.951 11.842a.1.1 0 0 1-.098.076H6.052a.1.1 0 0 1-.098-.076L3.003 10.082a.1.1 0 0 1 .09-.123c4.66-.381 5.623 2.787 5.815 3.537h6.184c.192-.75 1.155-3.918 5.815-3.537a.1.1 0 0 1 .09.123Z"
      />
    </svg>
  );
};
export default FrenchFries_02;
