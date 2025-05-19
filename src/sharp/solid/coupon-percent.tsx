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
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2.75a.75.75 0 0 0-.75.75v6.75h1.223a1.75 1.75 0 1 1 0 3.5H1.25v6.75c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-6.75h-1.224a1.75 1.75 0 1 1 0-3.5h1.224V3.5a.75.75 0 0 0-.75-.75zM9.914 15.5l5.587-5.586L14.086 8.5 8.5 14.086zm.598-7H8.5v2h2.01zm4.989 5h-2.012v2h2.012z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CouponPercent;
