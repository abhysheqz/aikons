import React from "react";
const BitcoinEllipse: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.5 16V8M11 8V6m2.5 2V6M11 18v-2m2.5 2v-2M9.5 12h5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H8M8 8h6.5A1.5 1.5 0 0 1 16 9.5v1a1.5 1.5 0 0 1-1.5 1.5h-5"
      />
    </svg>
  );
};
export default BitcoinEllipse;
