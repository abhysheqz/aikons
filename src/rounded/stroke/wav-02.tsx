import React from "react";
const Wav_02: React.FC<
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
        d="M18 11c0-.818 0-1.57-.152-1.937s-.441-.657-1.02-1.235l-4.736-4.736c-.499-.499-.748-.748-1.058-.896a2 2 0 0 0-.197-.082C10.514 2 10.161 2 9.456 2c-3.245 0-4.868 0-5.967.886a4 4 0 0 0-.603.603C2 4.59 2 6.211 2 9.456V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h8M11 2.5V3c0 2.828 0 4.243.879 5.121C12.757 9 14.172 9 17 9h.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 14v5l2-2.5 2 2.5v-5m2.5 5 1.75-5h.5l1.75 5m-3-1.5h2M18 14l1.75 5h.5L22 14"
      />
    </svg>
  );
};
export default Wav_02;
