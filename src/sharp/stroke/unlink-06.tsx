import React from "react";
const Unlink_06: React.FC<
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
        d="M13.5 14V8h-7v13h7v-3m-3-8v6h7V3h-7v3M20 10.5 22 9m-2 5.5 2 1.5M4 10.5 2 9m2 5.5L2 16"
      />
    </svg>
  );
};
export default Unlink_06;
