import React from "react";
const Award_03: React.FC<
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
        d="M15.95 17H16a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2h1v-1a3 3 0 0 1 3-3h.08L6.53 7.318a2.75 2.75 0 0 1 1.883-3.055l7.765-2.47a1.75 1.75 0 0 1 2.25 1.99zM17 20v1H7v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Award_03;
