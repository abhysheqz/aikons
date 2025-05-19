import React from "react";
const Download_02: React.FC<
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
        d="M22 13.947 18.724 20.5H5.277L2 13.947l1.789-.894L6.513 18.5h10.975l2.723-5.447z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 3.5v7.586l1.293-1.293 1.414 1.414L12 14.914l-3.707-3.707 1.414-1.414L11 11.086V3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Download_02;
