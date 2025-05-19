import React from "react";
const Saturn_01: React.FC<
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
        d="M5.636 18.364A9 9 0 0 1 18.364 5.636m1.93 2.864A9 9 0 0 1 8.5 20.294"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.83 3.822c2.702-1.683 4.89-2.303 5.77-1.424 1.54 1.537-1.509 7.083-6.811 12.386s-10.85 8.355-12.39 6.818c-.875-.874-.268-3.042 1.393-5.725"
      />
    </svg>
  );
};
export default Saturn_01;
