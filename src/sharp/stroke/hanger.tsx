import React from "react";
const Hanger: React.FC<
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
        d="M4.126 15.367 12 11l7.874 4.367a2.208 2.208 0 0 1-1.082 4.133H5.208a2.208 2.208 0 0 1-1.082-4.133"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 6.405c0-1.052.895-1.905 2-1.905s2 .853 2 1.905c0 .72-.42 1.346-1.038 1.67-.489.256-.962.425-.962.425V11"
      />
    </svg>
  );
};
export default Hanger;
