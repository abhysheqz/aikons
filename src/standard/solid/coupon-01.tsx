import React from "react";
const Coupon_01: React.FC<
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
        d="M3.25 4A2.75 2.75 0 0 1 6 1.25h12A2.75 2.75 0 0 1 20.75 4v17.5a.75.75 0 0 1-1.085.67L16.04 20.36l-3.643 2.277a.75.75 0 0 1-.796 0L7.96 20.359 4.335 22.17A.75.75 0 0 1 3.25 21.5zm11.043 3.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414zM9.009 7H9a1 1 0 0 0 0 2h.009a1 1 0 0 0 0-2M15 13h-.009a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coupon_01;
