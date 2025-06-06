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
        d="M4.126 15.867 12 11.5l7.874 4.367A2.208 2.208 0 0 1 18.792 20H5.208a2.208 2.208 0 0 1-1.082-4.133M10 6.905C10 5.853 10.895 5 12 5s2 .853 2 1.905c0 .72-.42 1.346-1.038 1.67C12.473 8.831 12 9 12 9v2.5"
      />
    </svg>
  );
};
export default Hanger;
