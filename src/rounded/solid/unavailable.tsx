import React from "react";
const Unavailable: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11m4.048-5.396a8.8 8.8 0 0 0 12.348 12.348zm1.556-1.556 12.348 12.348A8.8 8.8 0 0 0 6.854 5.048"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unavailable;
