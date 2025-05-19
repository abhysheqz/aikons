import React from "react";
const PayByCheck: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.997 11.995h-3v9.004h18v-9.004h-2M14.997 17.998h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8.985 11.506 8.496-8.502a.01.01 0 0 1 .014 0L21 6.5a.01.01 0 0 1 0 .014l-8.473 8.455H8.985z"
      />
    </svg>
  );
};
export default PayByCheck;
