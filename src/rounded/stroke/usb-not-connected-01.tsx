import React from "react";
const UsbNotConnected_01: React.FC<
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
        strokeWidth={1.5}
        d="M14 6v-.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.607 2 11.904 2 10.5 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C7 3.393 7 4.096 7 5.5V6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 16.5H9.516a3.08 3.08 0 0 1-2.547-1.338l-.601-.885a9.9 9.9 0 0 1-1.68-4.785l-.184-2.379C4.437 6.243 5.14 5.5 6.03 5.5h8.94c.89 0 1.593.743 1.525 1.613L16.389 8.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 17v5M9.5 8.5h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m19.5 11-6 6m6 0-6-6"
      />
    </svg>
  );
};
export default UsbNotConnected_01;
