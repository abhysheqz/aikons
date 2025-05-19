import React from "react";
const CheckUnread_01: React.FC<
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
        strokeWidth={1.5}
        d="M5 14.5S7 15 8.5 18c0 0 1.616-2.664 3.88-5.407M19 7c-1.546.574-3.153 1.865-4.63 3.37M5 5l14 14"
      />
    </svg>
  );
};
export default CheckUnread_01;
