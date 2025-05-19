import React from "react";
const PolyTank: React.FC<
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
        fillRule="evenodd"
        d="M19.386 6.395a14.9 14.9 0 0 0-4.011-1.686V1.788h-6.75v2.921a14.9 14.9 0 0 0-4.01 1.686l-.365.218V11.7c2.396-.589 5.012-.912 7.75-.912s5.354.323 7.75.912V6.613zM4.25 21.095v-7.847c2.37-.617 4.99-.96 7.75-.96s5.38.343 7.75.96v7.848l-.535.16c-1.63.49-3.383.817-5.215.956v-4.674h-4v4.674a24.7 24.7 0 0 1-5.216-.956zM12 4.289q-.95 0-1.875.128V3.288h3.75v1.128A14 14 0 0 0 12 4.288"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PolyTank;
