import React from "react";
const ArrowShrink_01: React.FC<
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
        d="M6.502 10.737c.845.011 3.641.592 4.234 0 .593-.593.012-3.39 0-4.234m2.532 11c-.011-.845-.592-3.641 0-4.234.593-.593 3.39-.012 4.234 0M21 21l-7.389-7.382m-3.24-3.243L3 3"
      />
    </svg>
  );
};
export default ArrowShrink_01;
