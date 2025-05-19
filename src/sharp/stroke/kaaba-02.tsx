import React from "react";
const Kaaba_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 22V2h-18v20"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12.5 22v-7h-5v7" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 6h18M3.5 19h4m5 0h9M3.5 9h3m2 0h3m2 0h3m2 0h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 22h20"
      />
    </svg>
  );
};
export default Kaaba_02;
