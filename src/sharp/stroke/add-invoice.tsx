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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 11V2H3v19.499l4.028-2.5L11 22l.999-.75M11 11H7M17 14v8m4-4h-8M15 7H7"
      />
    </svg>
  );
};
export default AddInvoice;
