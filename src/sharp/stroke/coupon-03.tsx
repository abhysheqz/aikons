import React from "react";
const Coupon_03: React.FC<
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
        strokeWidth={1.5}
        d="M21.9 3.5H2.1a.1.1 0 0 0-.1.1v5.838c1.315-.042 2.202.336 2.769 1.602.236.529.28 1.249.075 1.79-.65 1.389-1.65 1.695-2.844 1.653V20.4a.1.1 0 0 0 .1.1h19.8a.1.1 0 0 0 .1-.1v-5.923c-1.37-.045-2.111-.306-2.601-1.213-.531-.723-.589-1.744 0-2.647.478-.808 1.222-1.153 2.6-1.176v-5.84a.1.1 0 0 0-.1-.1Z"
      />
    </svg>
  );
};
export default Coupon_03;
