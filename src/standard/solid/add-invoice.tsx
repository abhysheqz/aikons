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
        fill="currentColor"
        fillRule="evenodd"
        d="M5 1.25A2.75 2.75 0 0 0 2.25 4v17.5a.75.75 0 0 0 1.085.67L6.96 20.36l3.643 2.277a.75.75 0 0 0 .796 0l3.102-1.94V20h-1.75a2.25 2.25 0 0 1 0-4.5h1.75v-1.75a2.25 2.25 0 0 1 4.5 0h.75V4A2.75 2.75 0 0 0 17 1.25zM6 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m11.75 3.75a1 1 0 1 0-2 0v3h-3a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddInvoice;
