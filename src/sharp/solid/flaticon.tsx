import React from "react";
const Flaticon: React.FC<
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
        d="m2 6 9 15 2.911-1.93-3.678-6.115L12.09 9.75H8.306L6.671 7.032h6.994L16 3H5z"
      />
      <path fill="currentColor" d="m22 6-2.842-3-5.802 9.62 2.38 3.778z" />
    </svg>
  );
};
export default Flaticon;
