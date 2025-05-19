import React from "react";
const BabyGirlDress: React.FC<
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
        d="m15.987 9.48 4 7.68c-1.596 2.295-4.581 3.839-8 3.839s-6.403-1.544-8-3.84l4-7.679"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.12 12.572c.671-.35 1.256-.21 1.608.016l.258.139.259-.139c.352-.225.937-.366 1.607-.016.88.46 1.079 1.98-.95 3.262-.387.244-.58.366-.916.366-.335 0-.528-.122-.915-.366-2.03-1.282-1.83-2.801-.95-3.262Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.827 11.632 5.168-3.028a.01.01 0 0 0 .003-.014L18 3h-2.993v.727c0 1.613-1.345 2.92-3.004 2.92S8.997 5.34 8.997 3.728v-.726H6L2.002 8.576a.01.01 0 0 0 .003.014l5.202 3.05"
      />
    </svg>
  );
};
export default BabyGirlDress;
