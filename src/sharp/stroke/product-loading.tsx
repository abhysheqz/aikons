import React from "react";
const ProductLoading: React.FC<
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
        d="M4.5 17V6h15v11z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m4.5 6 2-4h11l2 4M10 9h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19.5V22m0-2.5H7m5 0h5m-10 0H2V22m5-2.5V22m10-2.5h5.001V22m-5-2.5V22"
      />
    </svg>
  );
};
export default ProductLoading;
