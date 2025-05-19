import React from "react";
const DistributeVerticalCenter: React.FC<
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
        d="M5 17H2m17 0h3M16.002 4.5h-8v5h8zM19.002 14.5h-14v5h14zM8 7H2m14 0h6"
      />
    </svg>
  );
};
export default DistributeVerticalCenter;
