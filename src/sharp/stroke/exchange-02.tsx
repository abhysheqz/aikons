import React from "react";
const Exchange_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M4.125 9.5v-6M6 3.5V2m0 9V9.5m-1.875-3h3.75m0 0C8.496 6.5 9 7.004 9 7.625v.75C9 8.996 8.496 9.5 7.875 9.5H3m4.875-3C8.496 6.5 9 5.996 9 5.375v-.75C9 4.004 8.496 3.5 7.875 3.5H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 17.5 3-4.5 3 4.5m-6 0 3 4.5 3-4.5m-6 0 3 1.125 3-1.125"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 5h7v5h-.5l-2-1.5M12 19H5v-5h.5l2 1.5"
      />
    </svg>
  );
};
export default Exchange_02;
