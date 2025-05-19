import React from "react";
const Blockchain_02: React.FC<
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
        d="M11.75 1a.75.75 0 0 1 .75.75v3.565l6.622 3.784a.75.75 0 0 1 .378.651v7.599l2.666 1.777a.75.75 0 1 1-.832 1.248l-2.614-1.743-6.598 3.77a.75.75 0 0 1-.744 0l-6.598-3.77-2.614 1.743a.75.75 0 1 1-.832-1.248L4 17.349V9.75a.75.75 0 0 1 .378-.651L11 5.315V1.75a.75.75 0 0 1 .75-.75M5.5 17.315v-6.273l5.5 3.143v6.273zm7 3.143v-6.273l5.5-3.143v6.273z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_02;
