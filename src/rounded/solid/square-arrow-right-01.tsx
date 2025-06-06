import React from "react";
const SquareArrowRight_01: React.FC<
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
        d="M1.93 6.688c-.18 1.344-.18 3.064-.18 5.255v.114c0 2.191 0 3.912.18 5.255.186 1.377.573 2.469 1.431 3.327s1.95 1.245 3.327 1.43c1.343.181 3.064.181 5.255.181h.114c2.19 0 3.912 0 5.255-.18 1.377-.186 2.469-.573 3.327-1.43.858-.859 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255v-.114c0-2.19 0-3.911-.18-5.255-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43-1.343-.18-3.064-.18-5.255-.18h-.114c-2.19 0-3.911 0-5.255.18-1.377.185-2.469.572-3.327 1.43s-1.245 1.95-1.43 3.327m10.53 5.25.026.062-.026.063a3.4 3.4 0 0 1-.262.454c-.248.374-.591.804-.955 1.225-.36.416-.722.804-.995 1.088l-.449.457a1 1 0 0 0 1.402 1.427l.489-.498c.289-.3.677-.715 1.067-1.167.386-.447.793-.951 1.108-1.427.157-.237.305-.488.417-.735.104-.23.218-.545.218-.887s-.114-.656-.218-.886a5.4 5.4 0 0 0-.417-.736c-.315-.476-.722-.98-1.108-1.427-.39-.452-.778-.866-1.067-1.167l-.49-.497a1 1 0 1 0-1.4 1.427l.448.456c.273.284.635.672.995 1.088.364.421.707.852.955 1.225q.185.282.262.454"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowRight_01;
