import React from "react";
const PointingLeft_05: React.FC<
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
        d="M4.883 1.076A1 1 0 0 1 5.5 2v1.5H8a1 1 0 1 1 0 2H5.5V7a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.75 19.978h2.75a.45.45 0 0 0 0-.9H9.697A2.74 2.74 0 0 1 8.75 17v-.422h2.75a.45.45 0 0 0 0-.9H8.32A2.74 2.74 0 0 1 7.75 14v-.25c.011-.137.078-.452.253-.62h2.498a.45.45 0 0 0 0-.9H2.57a1.321 1.321 0 1 1 0-2.642h11.036a.45.45 0 0 0 .319-.767l-2.228-2.24a1.661 1.661 0 0 1 2.178-2.498l6.858 5.167h1.265a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75h-1.236l-1.2.959a4.75 4.75 0 0 1-2.967 1.04H12.5A2.75 2.75 0 0 1 9.75 20z"
      />
    </svg>
  );
};
export default PointingLeft_05;
