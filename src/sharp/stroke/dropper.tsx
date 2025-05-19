import React from "react";
const Dropper: React.FC<
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
        d="m13.759 5.697 2.756-2.756a3.213 3.213 0 0 1 4.544 4.542l-2.757 2.756M13.76 5.697l4.543 4.542M13.76 5.697 12 3.939m6.302 6.3 1.759 1.758M12.021 7.02 3.992 15v3.427L2.407 20.02c-.622.634-.424 1.259-.076 1.635.243.264.888.642 1.622-.03l1.622-1.622h3.433l2.456-2.467m0 0-1.71-1.714m1.71 1.714 3.117-3.111m2.405-2.436-2.405 2.436m0 0-1.727-1.727"
      />
    </svg>
  );
};
export default Dropper;
