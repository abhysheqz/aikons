import React from "react";
const Bus_03: React.FC<
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
        d="M1.252 5.214a.97.97 0 0 1 .977-.964h13.68c3.778 0 6.841 3.022 6.841 6.75v5.786a.97.97 0 0 1-.977.964h-1.056q.033-.245.033-.5a3.75 3.75 0 1 0-7.467.5h-2.566q.033-.245.033-.5a3.75 3.75 0 1 0-7.467.5H2.227a.98.98 0 0 1-.69-.282.96.96 0 0 1-.287-.682zM3.207 9.25V6.18H5V9.25zM7 9.25h3V6.18H7zm5-3.071V9.25h3V6.18zm5 .12v3.639l1.312 1.312h2.485V11c0-2.293-1.623-4.213-3.797-4.701"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.502 17.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M9.502 17.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
    </svg>
  );
};
export default Bus_03;
