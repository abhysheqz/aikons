import React from "react";
const AirplaneModeOff: React.FC<
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
        d="M2 2.023 22 22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.202 5.039C8.549 3.764 9.339 2.864 11.012 2c2.907 1.435 3.115 3.119 3.012 7.052l5.936 3.467.04 2.948c.005.067-.204.017-.27 0l-1.506-.397M7.988 7.99c0 .355-.005.66 0 1.063L2.007 12.52v2.863c-.004.067-.027.147.038.13l6.692-1.678.27 3.676-2.967 2.444c-.035.03-.02.055 0 .096l.94 1.89.003.005c.02.042.02.044.067.027l3.945-1.485 3.913 1.462c.049.018.095.046.117 0l.924-1.892.001-.002c.019-.04.033-.07-.001-.099l-2.952-2.446.275-3.676.74.185"
      />
    </svg>
  );
};
export default AirplaneModeOff;
