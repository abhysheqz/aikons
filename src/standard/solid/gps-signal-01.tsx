import React from "react";
const GpsSignal_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M13.264 10.737a2.515 2.515 0 0 0-3.557 0 1 1 0 1 1-1.414-1.415 4.515 4.515 0 0 1 6.385 6.385 1 1 0 0 1-1.415-1.414 2.515 2.515 0 0 0 0-3.556"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.135 6.403c.633-.9 1.86-.876 2.555-.181l12.088 12.087c.695.695.718 1.922-.181 2.555a10.34 10.34 0 0 1-5.967 1.886c-5.733 0-10.38-4.648-10.38-10.38 0-2.22.697-4.279 1.885-5.967M14.563 1.898a1 1 0 0 1 1.096-.893c1.882.193 3.648.946 5.017 2.313 1.373 1.371 2.128 3.142 2.319 5.028a1 1 0 1 1-1.99.201c-.15-1.48-.732-2.805-1.742-3.813-1.008-1.006-2.33-1.587-3.808-1.74a1 1 0 0 1-.892-1.096m-.537 3.368a1 1 0 0 1 1.202-.746 5.67 5.67 0 0 1 2.738 1.503 5.66 5.66 0 0 1 1.51 2.75 1 1 0 0 1-1.948.453 3.66 3.66 0 0 0-.975-1.787 3.67 3.67 0 0 0-1.781-.971 1 1 0 0 1-.746-1.202"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GpsSignal_01;
