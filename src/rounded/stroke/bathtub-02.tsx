import React from "react";
const Bathtub_02: React.FC<
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
        d="M22 12h-7a3 3 0 0 1-1.8-.6l-2.4-1.8A3 3 0 0 0 9 9H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9v2c0 3.771 0 5.657 1.172 6.828S7.229 19 11 19h3c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 16.213 21 14.81 21 12M18 19v2M6 19v2M5 9V4.5a1.5 1.5 0 1 1 3 0V5"
      />
    </svg>
  );
};
export default Bathtub_02;
