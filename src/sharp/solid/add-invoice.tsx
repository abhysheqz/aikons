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
        d="M19.75 1.25H2.25v21.409l4.737-2.913 4.012 3.004 3.501-2.606V20h-4v-4.5h4v-4h5.25zM6 5h10v2H6zm0 4h6v2H6zm11.75 7.75v-4h-2v4h-4v2h4v4h2v-4h4v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddInvoice;
