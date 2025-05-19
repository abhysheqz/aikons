import React from "react";
const MoneySecurity: React.FC<
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
        d="M21 11.01v-6c-5-.5-9-3-9-3s-4 2.5-9 3v6c0 7.5 9 11 9 11s9-3.5 9-11Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.01 9.008c-1.106 0-2.003.672-2.003 1.501 0 .83.897 1.501 2.003 1.501s2.003.672 2.003 1.501-.897 1.5-2.003 1.5m0-6.003c.872 0 1.614.418 1.889 1m-1.89-1v-1.5m0 7.504c-.871 0-1.613-.418-1.888-1m1.889 1v1.5"
      />
    </svg>
  );
};
export default MoneySecurity;
