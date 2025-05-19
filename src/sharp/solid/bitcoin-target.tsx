import React from "react";
const BitcoinTarget: React.FC<
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
        d="M12 19.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15M2.5 12a9.5 9.5 0 1 0 19 0 9.5 9.5 0 0 0-19 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 1v5h-2V1zM23 13h-5v-2h5zM13 18v5h-2v-5zM6 13H1v-2h5zM13 7v1.333h.563c1.13 0 1.937.958 1.937 2V11c0 .355-.093.7-.261 1 .168.3.261.645.261 1v.667c0 1.043-.808 2-1.937 2H13V17h-2v-1.333H8.5v-2h.938v-3.334H8.5v-2H11V7zm-1.562 3.333V11H13.5v-.667zm0 2.667v.667H13.5V13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinTarget;
