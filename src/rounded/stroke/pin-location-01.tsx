import React from "react";
const PinLocation_01: React.FC<
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
      <circle cx={12} cy={7} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 11v7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.847 16c1.647 2.113 2.47 3.17 2.04 4.006q-.06.116-.14.223c-.575.771-2.06.771-5.03.771h-1.435c-2.97 0-4.454 0-5.029-.771a1.6 1.6 0 0 1-.14-.223c-.43-.837.393-1.893 2.04-4.006"
      />
    </svg>
  );
};
export default PinLocation_01;
