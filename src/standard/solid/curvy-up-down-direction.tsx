import React from "react";
const CurvyUpDownDirection: React.FC<
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
        d="M13 1a1 1 0 0 1 1 1v4.025a3 3 0 0 1-3.012 3L7 9.008A.996.996 0 1 0 6.996 11H17a3 3 0 0 1 0 6h-4a1 1 0 0 0-1 1v4a1 1 0 1 1-2 0v-4a3 3 0 0 1 3-3h4a1 1 0 1 0 0-2H6.996a2.996 2.996 0 1 1 .012-5.992l3.988.017a1 1 0 0 0 1.004-1V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 1a1 1 0 0 1 .707.293l2 2a1 1 0 0 1-1.414 1.414L13 3.414l-1.293 1.293a1 1 0 1 1-1.414-1.414l2-2A1 1 0 0 1 13 1M8.293 19.293a1 1 0 0 1 1.414 0L11 20.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CurvyUpDownDirection;
