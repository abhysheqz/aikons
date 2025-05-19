import React from "react";
const CargoShip: React.FC<
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
        d="M2 21.494c1.5 0 2.384-.994 3.333-.994s2.492 1.005 3.334.994c1.01.009 2.193-.994 3.333-.994s2.323 1.003 3.333.994c1.295.096 2.384-.994 3.334-.994s2.333.994 3.333.994"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.979 13.412 6.999 6h10l1.92 7.412"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 6 1-3.5h4L15 6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.975 14.53 9.038-4.006 8.924 3.952a.1.1 0 0 1 .052.129c-1.198 3.021-2.022 4.792-3.046 6.044m-14.968-6.12c.687 1.666.966 2.473 1.617 3.75.337.66.985 1.682 1.442 2.266m-3.06-6.016c-.049.022-.02-.05 0 0Z"
      />
    </svg>
  );
};
export default CargoShip;
