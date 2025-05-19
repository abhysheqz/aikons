import React from "react";
const Mollie: React.FC<
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
        d="M6 18H2v-6a6 6 0 0 1 10-4.472A6 6 0 0 1 22 12v6h-4v-6a2 2 0 1 0-4 0v6h-4v-6a2 2 0 1 0-4 0z"
      />
    </svg>
  );
};
export default Mollie;
