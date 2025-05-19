import React from "react";
const CircleArrowUpDouble: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 11.085S11.21 8.5 12 8.5s3 2.585 3 2.585M9 15.5s2.21-2.585 3-2.585 3 2.585 3 2.585"
      />
    </svg>
  );
};
export default CircleArrowUpDouble;
