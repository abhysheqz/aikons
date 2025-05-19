import React from "react";
const ShippingCenter: React.FC<
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
        d="M1.25 18c0-2.071 1.75-3.75 3.91-3.75h13.68c2.16 0 3.91 1.679 3.91 3.75s-1.75 3.75-3.91 3.75H5.16C3 21.75 1.25 20.071 1.25 18m3.91-1.875c-1.08 0-1.955.84-1.955 1.875s.875 1.875 1.954 1.875h13.682c1.08 0 1.954-.84 1.954-1.875s-.875-1.875-1.954-1.875z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 18a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m4.996 0a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1m4.995 0a1 1 0 0 1 1-1H17a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1M6 2.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM10 7h4V5h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShippingCenter;
