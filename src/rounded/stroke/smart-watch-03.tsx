import React from "react";
const SmartWatch_03: React.FC<
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
        d="M4.5 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C7.07 4.5 8.712 4.5 12 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C19.5 7.07 19.5 8.712 19.5 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554c-1.107.908-2.75.908-6.038.908-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C4.5 16.93 4.5 15.288 4.5 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 22h6M9 2h6M9.388 9.331c.939-.548 1.758-.327 2.25.025.202.144.303.216.362.216.06 0 .16-.072.362-.216.492-.352 1.311-.573 2.25-.025 1.232.72 1.51 3.094-1.33 5.097-.542.381-.813.572-1.282.572s-.74-.19-1.281-.572c-2.841-2.003-2.563-4.377-1.33-5.097Z"
      />
    </svg>
  );
};
export default SmartWatch_03;
