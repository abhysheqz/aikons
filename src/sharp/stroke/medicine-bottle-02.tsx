import React from "react";
const MedicineBottle_02: React.FC<
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
        d="M5 6h10V2H5zM10 22H4v-7.908c0-.75 0-1.126.067-1.487a4 4 0 0 1 .35-1.05c.163-.328.388-.628.838-1.228l.403-.538c.222-.295.332-.443.419-.59a3 3 0 0 0 .23-2.543C6.246 6.495 6.164 6.33 6 6m9.583 5.556c-.163-.33-.388-.63-.838-1.23l-.403-.537c-.222-.295-.332-.443-.419-.59a3 3 0 0 1-.23-2.543c.06-.161.142-.326.307-.656"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.537 14.906a4 4 0 1 1-5.07 6.188m5.07-6.188a4 4 0 0 0-5.07 6.188m5.07-6.188-5.07 6.188"
      />
    </svg>
  );
};
export default MedicineBottle_02;
