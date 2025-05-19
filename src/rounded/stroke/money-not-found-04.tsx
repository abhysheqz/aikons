import React from "react";
const MoneyNotFound_04: React.FC<
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
        strokeWidth={2}
        d="M18.5 11.49v.01M5.5 12.49v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 3.001 18 18M10.232 10.231a2.5 2.5 0 1 0 3.535 3.536"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.657 17.658c.213-.278.343-.612.343-.975V6.928c0-.568-.325-1.083-.867-1.25C20.19 5.384 18.479 5 16 5c-2.647 0-4.172.56-6.209.791M18.22 18.22a22 22 0 0 0-2.22-.11c-4.75 0-5.89 1.806-12.854.27A1.47 1.47 0 0 1 2 16.94V6.921c0-.976.92-1.687 1.878-1.497.671.133 1.285.233 1.851.305"
      />
    </svg>
  );
};
export default MoneyNotFound_04;
