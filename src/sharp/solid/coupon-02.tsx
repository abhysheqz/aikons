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
        fill="currentColor"
        fillRule="evenodd"
        d="M3.416 1.376A.75.75 0 0 0 2.25 2v20a.75.75 0 0 0 1.166.624L6 20.901l2.584 1.723a.75.75 0 0 0 .832 0L12 20.901l2.584 1.723a.75.75 0 0 0 .832 0L18 20.901l2.584 1.723A.75.75 0 0 0 21.75 22V2a.75.75 0 0 0-1.166-.624L18 3.099l-2.584-1.723a.75.75 0 0 0-.832 0L12 3.099 9.416 1.376a.75.75 0 0 0-.832 0L6 3.099zM14.586 8 8 14.586 9.414 16 16 9.414zm-4.577 0H8v2h2.009zM16 14h-2.009v2H16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Coupon_02;
