import React from "react";
const Brush: React.FC<
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
        d="M7.495 13.753c3.088-3.589 10.084-10.598 13.044-10.749 1.83-.175-1.817 6.321-10.46 13.43m1.38-6.39 2.257 2.28M3 20.855c.71-2.507.262-1.275.504-4.162.13-.428.389-1.754 2.01-2.415 1.842-.752 3.193.384 3.542.918 1.029 1.115 1.148 2.5 0 4.082C7.908 20.86 4.504 21.253 3 20.855"
      />
    </svg>
  );
};
export default Brush;
