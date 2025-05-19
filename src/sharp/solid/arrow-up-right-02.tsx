import React from "react";
const ArrowUpRight_02: React.FC<
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
        d="M17.869 13.91 19.003 5 10.09 6.131l3.182 3.182L5 17.586 6.414 19l8.273-8.272z"
      />
    </svg>
  );
};
export default ArrowUpRight_02;
