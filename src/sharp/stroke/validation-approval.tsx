import React from "react";
const ValidationApproval: React.FC<
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
        d="M16.999 9V2h-15v20h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m6.499 8 1.75 2 3.75-4M4.999 14h5m-5 3h5M18.002 18.5h-3.011L11 20.01v1.935c0 .027.022.05.05.05H21.95a.05.05 0 0 0 .05-.05v-1.943zm0 0 .263-1.356c.127-.675.495-1.297.665-2.003.15-.623.078-1.14-.163-1.711-.562-1.066-1.493-1.381-2.033-1.426-1.598-.083-2.421.971-2.678 1.944-.119.696-.064 1.103.255 1.929.494 1.128.488 1.62.743 2.792"
      />
    </svg>
  );
};
export default ValidationApproval;
