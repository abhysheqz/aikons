import React from "react";
const BitcoinReceive: React.FC<
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
        d="M2 4.8h7.273C10.779 4.8 12 6.412 12 8.4S10.779 12 9.273 12m0 0C10.779 12 12 13.612 12 15.6s-1.221 3.6-2.727 3.6H2M9.273 12H3.818m-.151-7.2v14.4M5.182 3v1.8M8.97 3v1.8M5.182 19.2V21m3.788-1.8V21"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.5 12h-7.61m2.61 3-3-3 3-3"
      />
    </svg>
  );
};
export default BitcoinReceive;
