import React from "react";
const InfinityCircle: React.FC<
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
        d="M12 12s-1.643 2.5-3.3 2.5S6 13.38 6 12s1.043-2.5 2.7-2.5S12 12 12 12Zm0 0s1.643 2.5 3.3 2.5S18 13.38 18 12s-1.043-2.5-2.7-2.5S12 12 12 12Z"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default InfinityCircle;
