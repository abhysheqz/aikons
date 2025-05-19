import React from "react";
const ShopSign: React.FC<
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
        d="M6.949 1.77a.8.8 0 0 1 .176-.02h11a.75.75 0 0 1 .734.595l4 18.969a.748.748 0 0 1-.734.903h-10a.75.75 0 0 1-.726-.558l-1.366-5.183h-5.58L3.09 21.512a1 1 0 0 1-1.93-.521L6.166 2.492a1 1 0 0 1 .782-.721m.331 4.262-2.286 8.447h4.513z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShopSign;
