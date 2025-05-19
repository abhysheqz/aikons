import React from "react";
const Woman: React.FC<
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
        d="M9.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9.128 9.465a3.261 3.261 0 0 1 5.743 0l2.879 5.346v1.94l-3-.001v6h-5.5v-6h-3v-1.94z"
      />
    </svg>
  );
};
export default Woman;
