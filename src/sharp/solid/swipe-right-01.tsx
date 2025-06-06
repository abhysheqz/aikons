import React from "react";
const SwipeRight_01: React.FC<
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
        d="m7.102 20.25-4.318-5.703a2.53 2.53 0 0 1-.007-3.101 2.4 2.4 0 0 1 3.503-.337l.024.022.946.993V3.75a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.569.638 6.603 2.685.936.942.991 2.32.82 3.46-.175 1.177-.626 2.343-.998 3.12l-.697 1.454-.336.7v2.583H7.102z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.923 5.457-.793.793 1.414 1.414 3.207-3.207-3.207-3.207-1.414 1.414.793.793h-3.586v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeRight_01;
