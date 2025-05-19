import React from "react";
const PointingLeft_06: React.FC<
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
        d="M9.747 19.994h2.75a.45.45 0 1 0 0-.9H9.712a2.74 2.74 0 0 1-.966-2.092v-.468h2.75a.45.45 0 1 0 0-.9H8.283a2.74 2.74 0 0 1-.537-1.632v-.25c-.004-.154.043-.498.262-.645h2.487a.45.45 0 0 0 0-.9H2.584a1.337 1.337 0 1 1 0-2.675h10.913a.45.45 0 0 0 0-.9H9.199l1.775-2.03a3.96 3.96 0 0 1 5.309-.594l4.458 3.244h1.256a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75h-1.236l-1.2.958a4.75 4.75 0 0 1-2.967 1.041h-4.096a2.75 2.75 0 0 1-2.75-2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.883 1.076A1 1 0 0 1 5.5 2v1.5H8a1 1 0 1 1 0 2H5.5V7a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_06;
