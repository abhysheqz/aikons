import React from "react";
const CustomerSupport: React.FC<
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
        d="M18.665 8.333a.75.75 0 0 1 .75.046l3 1.997a.75.75 0 0 1 .335.624v4a.75.75 0 0 1-.334.624l-3 2a.75.75 0 0 1-.752.046l-2.414-1.21V9.54zM4.585 8.38a.75.75 0 0 1 .75-.047L7.75 9.539v6.92L5.336 17.67a.75.75 0 0 1-.752-.046l-3-2A.75.75 0 0 1 1.25 15v-4a.75.75 0 0 1 .335-.624z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4C8.536 4 6 6.378 6 9H4c0-4.005 3.732-7 8-7s8 2.995 8 7h-2c0-2.622-2.536-5-6-5M18 20v-3h2v4a1 1 0 0 1-1 1h-7v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomerSupport;
