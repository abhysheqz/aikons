import React from "react";
const MoneyRemove_02: React.FC<
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
        d="M14.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12.5V5.927c0-.568-.324-1.082-.867-1.25C20.19 4.383 18.479 4 16 4c-4.58 0-5.803 1.677-12.122.424C2.921 4.234 2 4.945 2 5.92v10.017c0 .688.473 1.293 1.145 1.441 6.449 1.422 7.903-.02 11.855-.242"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8c1.951 0 3.705-1.595 3.929-3.246M18.5 4.5c0 2.04 1.765 3.969 3.5 3.969M6 17.496a4 4 0 0 0-4-4M22 15.5l-2.25 2.25m0 0L17.5 20m2.25-2.25L17.5 15.5m2.25 2.25L22 20"
      />
    </svg>
  );
};
export default MoneyRemove_02;
