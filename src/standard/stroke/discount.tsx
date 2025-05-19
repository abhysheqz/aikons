import React from "react";
const Discount: React.FC<
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
        d="m14.5 9.5-5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 14.5h-.01m-4.98-5H9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.638 4.5H5.5a1 1 0 0 0-1 1v3.138a1 1 0 0 1-.232.64L2.533 11.36a1 1 0 0 0 0 1.28l1.735 2.082a1 1 0 0 1 .232.64V18.5a1 1 0 0 0 1 1h3.138a1 1 0 0 1 .64.232l2.082 1.735a1 1 0 0 0 1.28 0l2.082-1.735a1 1 0 0 1 .64-.232H18.5a1 1 0 0 0 1-1v-3.138a1 1 0 0 1 .232-.64l1.735-2.082a1 1 0 0 0 0-1.28l-1.735-2.082a1 1 0 0 1-.232-.64V5.5a1 1 0 0 0-1-1h-3.138a1 1 0 0 1-.64-.232L12.64 2.533a1 1 0 0 0-1.28 0L9.278 4.268a1 1 0 0 1-.64.232"
      />
    </svg>
  );
};
export default Discount;
