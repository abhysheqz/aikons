import React from "react";
const BedSingle_02: React.FC<
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
        d="M22 16.999H2M22 21v-9.003H2V21M15 11.997v-3H9v3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.004 12.016V6.11a.1.1 0 0 1 .1-.1h2.939C7.667 4.817 9.213 3.14 12 3c2.77.123 4.344 1.817 4.969 3.01h2.938a.1.1 0 0 1 .1.1v5.906"
      />
    </svg>
  );
};
export default BedSingle_02;
