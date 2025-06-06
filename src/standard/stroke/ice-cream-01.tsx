import React from "react";
const IceCream_01: React.FC<
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
        d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 9c-.598-3.002-2.762-5.362-5.506-6M5 9c.598-3.002 2.762-5.362 5.506-6M12 19v3m-2.5 0h5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 5c-.001 4.437 4.5 3.022 4.5 3.022C17 11.044 18 6.096 18 6.096"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.005 11c-1.976.606-5.647 1.009-8.058 1.009s-5.966-.389-7.943-.995c0 4.873 3.929 7.986 7.943 7.986s7.68-2.915 8.058-8"
      />
    </svg>
  );
};
export default IceCream_01;
