import React from "react";
const DistributeHorizontalCenter: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 5V2m0 17v3M19.5 16.002v-8h-5v8zM9.5 19.002v-14h-5v14zM17 8V2m0 14v6"
      />
    </svg>
  );
};
export default DistributeHorizontalCenter;
