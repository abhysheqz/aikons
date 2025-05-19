import React from "react";
const Bluetooth: React.FC<
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
        d="M11.503 2.633a1 1 0 0 1 1.002.003l5.998 3.5a1 1 0 0 1 .137 1.632L13.56 12l5.079 4.232a1 1 0 0 1-.137 1.632l-5.998 3.5A1 1 0 0 1 11 20.5v-6.366L6.64 17.768l-1.28-1.536L10.436 12 5.36 7.768l1.28-1.536 4.362 3.634V3.5a1 1 0 0 1 .502-.867M13 14.136l3.263 2.72L13 18.758zm0-4.272V5.24l3.263 1.904z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.992 11h2.009v2h-2.009zM4 11h2.009v2h-2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bluetooth;
