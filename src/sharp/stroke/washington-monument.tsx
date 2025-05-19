import React from "react";
const WashingtonMonument: React.FC<
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
        d="M2 21.999h20M20 21.999l-1-2.997H5l-1 2.997M9 6.012h6M12 19.001v-5.995M7.085 18.706l1.926-13.29 2.916-3.411a.01.01 0 0 1 .015 0l3.107 3.411 1.938 13.29"
      />
    </svg>
  );
};
export default WashingtonMonument;
