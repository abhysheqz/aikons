import React from "react";
const Coupon_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 9-6 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 15h-.009M9.009 9H9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.99 4.018-2.833-1.97A.1.1 0 0 0 3 2.133v19.767a.1.1 0 0 0 .156.083l2.86-1.968 2.935 1.953a.1.1 0 0 0 .11 0l2.96-1.953 2.935 1.952a.1.1 0 0 0 .11 0l2.911-1.952 2.867 1.957a.1.1 0 0 0 .156-.084V2.11a.1.1 0 0 0-.157-.083l-2.854 1.99-2.934-2a.1.1 0 0 0-.112 0l-2.922 2L9.048 2.06a.1.1 0 0 0-.11 0z"
      />
    </svg>
  );
};
export default Coupon_02;
