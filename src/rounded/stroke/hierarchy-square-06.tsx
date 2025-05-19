import React from "react";
const HierarchySquare_06: React.FC<
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
        d="M10 2h4c1.815 0 2 .925 2 2.5S15.815 7 14 7h-4c-1.815 0-2-.925-2-2.5S8.185 2 10 2ZM2 19.5c0-1.178 0-1.768.366-2.134S3.321 17 4.5 17s1.768 0 2.134.366S7 18.322 7 19.5s0 1.768-.366 2.134S5.679 22 4.5 22s-1.768 0-2.134-.366S2 20.678 2 19.5ZM17 19.5c0-1.178 0-1.768.366-2.134S18.322 17 19.5 17s1.768 0 2.134.366.366.956.366 2.134 0 1.768-.366 2.134S20.678 22 19.5 22s-1.768 0-2.134-.366S17 20.678 17 19.5ZM14.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7v3m-2.5 3-5 4m10-4 5 4"
      />
    </svg>
  );
};
export default HierarchySquare_06;
