import React from "react";
const DiscountTag_01: React.FC<
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
        d="m18.017 6.793.946.22L20 12.994l-8.93 8.977a.1.1 0 0 1-.141 0l-6.9-6.876a.1.1 0 0 1 0-.142l8.95-8.952 2.508.437"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9 14.5h5M11.499 12h.009m-.007 5h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 3.697C9.78 6.782 14.366.124 17.08 2.54 18.64 3.93 19.026 7 17 9"
      />
    </svg>
  );
};
export default DiscountTag_01;
