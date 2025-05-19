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
        d="M1 17.875a4 4 0 0 1 4-4h14a4 4 0 0 1 0 8H5a4 4 0 0 1-4-4m4-2a2 2 0 1 0 0 4h14a2 2 0 1 0 0-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 17.875a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m4.996 0a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1m4.995 0a1 1 0 0 1 1-1H17a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1M12.055 2.125h-.11c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h.11c1.367 0 2.47 0 3.337-.117.9-.12 1.658-.38 2.26-.981.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26s-1.36-.86-2.26-.981c-.867-.117-1.97-.117-3.337-.117M10.5 4.875a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShippingCenter;
