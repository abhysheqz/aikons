import React from "react";
const Airplane_02: React.FC<
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
        d="m10.281 10.411-2.518 2.897-4.005-.392a.01.01 0 0 0-.011.007L3 15.127a.01.01 0 0 0 .005.012l4.028 1.834 1.84 4.01a.01.01 0 0 0 .012.006l2.172-.708a.01.01 0 0 0 .007-.01l-.367-4.034 2.897-2.476m-3.314-3.35L4.12 6.702a.01.01 0 0 1-.002-.015l2.187-2.18 7.236 1.926m-3.259 3.978 3.26-3.978m0 0c1.544-1.925 2.175-2.972 4.184-3.361 1.402-.272 2.591.204 2.873.34.327.675.58 2.075.242 3.28-.34 1.206-.73 1.887-3.277 3.779m0 0 1.937 7.242-2.196 2.199a.01.01 0 0 1-.017-.002l-3.692-6.149m3.968-3.29-3.968 3.29"
      />
    </svg>
  );
};
export default Airplane_02;
