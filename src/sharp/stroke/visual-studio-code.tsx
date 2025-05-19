import React from "react";
const VisualStudioCode: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 2v5.5M17 2l5 2.5v15L17 22m0-20-9.233 8.002M17 22v-5.5m0 5.5-9.233-8.002M17 16.5v-9m0 9L10.605 12M17 7.5 10.605 12m0 0-2.838-1.998m0 0L3.5 7 2 9l3.462 3m0 0L2 15l1.5 2 4.267-3.002M5.462 12l2.305 1.998"
      />
    </svg>
  );
};
export default VisualStudioCode;
