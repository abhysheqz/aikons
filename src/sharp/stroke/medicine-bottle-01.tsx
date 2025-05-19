import React from "react";
const MedicineBottle_01: React.FC<
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
        d="M7 6h10V2H7z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6c.165.33.247.495.306.656a3 3 0 0 1-.23 2.542 7 7 0 0 1-.418.59l-.403.539c-.45.6-.675.9-.838 1.229a4 4 0 0 0-.35 1.05C6 12.965 6 13.34 6 14.092V22h12v-7.908c0-.75 0-1.126-.067-1.487a4 4 0 0 0-.35-1.05c-.163-.328-.388-.628-.838-1.228l-.403-.538c-.222-.295-.332-.443-.419-.59a3 3 0 0 1-.23-2.543c.06-.161.142-.326.307-.656"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 13v3m0 0v3m0-3H9m3 0h3"
      />
    </svg>
  );
};
export default MedicineBottle_01;
