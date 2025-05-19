import React from "react";
const LookLeft: React.FC<
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
        d="M22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12q0 .545.053 1.076c.61.362 1.156.61 1.457.72l.004.002c.796.3 1.238.452 2.236.452 1.537 0 2.83-.372 3.585-.874l.831 1.249C8.346 15.337 6.735 15.75 5 15.75c-1.253 0-1.888-.219-2.761-.547a8 8 0 0 1-.576-.242C2.948 19.458 7.09 22.75 12 22.75c5.937 0 10.75-4.813 10.75-10.75M8 7.75a1.25 1.25 0 0 1 0 2.5h-.01a1.25 1.25 0 0 1 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LookLeft;
