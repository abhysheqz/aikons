import React from "react";
const ArrowLeft_03: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 18V6h2v12zM11.293 7.293l1.414 1.414L10.414 11H20v2h-9.586l2.293 2.293-1.414 1.414L6.586 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowLeft_03;
