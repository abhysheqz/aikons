import React from "react";
const AddInvoice: React.FC<
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
        d="M19 11.5V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v17.5l4-2 4 2.5 1.5-.937M11 11H7M17 14v8m4-4h-8M15 7H7"
      />
    </svg>
  );
};
export default AddInvoice;
