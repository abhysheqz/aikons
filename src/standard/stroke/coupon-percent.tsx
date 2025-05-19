import React from "react";
const CouponPercent: React.FC<
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
        d="M14.5 14.5h-.007m-4.985-5H9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 9.5V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3.5a2.5 2.5 0 1 0 0 5V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3.5a2.5 2.5 0 0 0 0-5"
      />
    </svg>
  );
};
export default CouponPercent;
