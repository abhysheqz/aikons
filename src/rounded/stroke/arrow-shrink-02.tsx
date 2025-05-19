import React from "react";
const ArrowShrink_02: React.FC<
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
        d="M6.502 13.264c.845-.012 3.641-.593 4.234 0 .593.592.012 3.389 0 4.233m2.532-11c-.011.845-.592 3.641 0 4.234.593.593 3.39.012 4.234 0M21 3l-7.389 7.382m-3.24 3.243L3 21"
      />
    </svg>
  );
};
export default ArrowShrink_02;
