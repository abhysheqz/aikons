import React from "react";
const Xsl_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 11c0-.818 0-1.57-.152-1.937s-.441-.657-1.02-1.235l-4.736-4.736c-.499-.499-.748-.748-1.058-.896a2 2 0 0 0-.197-.082C12.014 2 11.661 2 10.956 2c-3.245 0-4.868 0-5.967.886a4 4 0 0 0-.603.603C3.5 4.59 3.5 6.211 3.5 9.456V14c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h8m-7-19.5V3c0 2.828 0 4.243.879 5.121C14.257 9 15.672 9 18.5 9h.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 14v3c0 .943 0 1.414.293 1.707S19.557 19 20.5 19M8 14l1.5 2.5m0 0L11 19m-1.5-2.5L11 14m-1.5 2.5L8 19M16 14h-1.5a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-1.5"
      />
    </svg>
  );
};
export default Xsl_02;
