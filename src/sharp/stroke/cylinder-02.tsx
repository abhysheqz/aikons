import React from "react";
const Cylinder_02: React.FC<
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
        d="M17 4c0 1.105-2.239 2-5 2s-5-.895-5-2 2.239-2 5-2 5 .895 5 2ZM21 18c0 2.21-4.03 4-9 4s-9-1.79-9-4 4.03-4 9-4 9 1.79 9 4ZM3 18 7 4m14 14L17 4"
      />
    </svg>
  );
};
export default Cylinder_02;
