import React from "react";
const StoreVerified_01: React.FC<
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
        strokeWidth={1.5}
        d="m14.717 6.997 1.507 1.5 3.015-2.999m2.763 1.5c0 2.759-2.25 4.996-5.024 4.996s-5.024-2.237-5.024-4.997S14.204 2 16.978 2s5.024 2.237 5.024 4.997ZM12.573 13.654a3.9 3.9 0 0 1-1.636.345c-1.661 0-3.136-1.277-3.477-2.675M9.035 6.01H3.922L2.034 11.62m6.334 1.381c-.776.608-1.606.997-2.672.997-1.663 0-2.69-.771-3.583-1.737-.353-.34.213-1.396.3-1.774m16.666 4.298v7.163a.05.05 0 0 1-.05.05H2.97a.05.05 0 0 1-.05-.05v-8.922"
      />
    </svg>
  );
};
export default StoreVerified_01;
