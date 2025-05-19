import React from "react";
const Hologram: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M3 22h18" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 19.5-1.5-5m-7 0-1.5 5m5-4v4M7 4.5 12 2l5 2.5m-10 0L12 7M7 4.5v6l5 2.5m5-8.5L12 7m5-2.5v6L12 13m0-6v6"
      />
    </svg>
  );
};
export default Hologram;
