import React from "react";
const CpuCharge: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m12 16 2-4h-4l2-4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 4.5h-15v15h15zM9.5 2v2.5m5-2.5v2.5M9.5 19.5V22m5-2.5V22M4.5 9.5H2m2.5 5H2M22 14.5h-2.5m2.5-5h-2.5"
      />
    </svg>
  );
};
export default CpuCharge;
